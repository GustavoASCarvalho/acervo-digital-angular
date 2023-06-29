import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isOnline: boolean;
  showHeader: boolean = true;
  constructor(
    private swUpdate: SwUpdate,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.isOnline = false;
  }
  ngOnInit() {
    this.updateOnlineStatus();
    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        let route = this.getChild(this.activatedRoute);
        let data = route.snapshot.data;
        if (data.hideHeader) {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
        if (this.swUpdate.isEnabled) {
          this.swUpdate.versionUpdates.pipe(
            filter(
              (evt: any): evt is VersionReadyEvent =>
                evt.type === 'VERSION_READY'
            ),
            map((evt: any) => {
              console.info(
                `currentVersion=[${evt.currentVersion} | latestVersion=[${evt.latestVersion}]`
              );
              console.log(
                `currentVersion=[${evt.currentVersion} | latestVersion=[${evt.latestVersion}]`
              );
              if (confirm('Nova versão disponível. Deseja atualizar?')) {
                window.location.reload();
              }
            })
          );
        }

        this.titleService.setTitle(data.title);
        if (data.desc) {
          this.metaService.updateTag({
            name: 'description',
            content: data.desc,
          });
        } else {
          this.metaService.removeTag("name='description'");
        }
      });
  }
  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild)
      return this.getChild(activatedRoute.firstChild);
    else return activatedRoute;
  }
  private updateOnlineStatus(): void {
    this.isOnline = window.navigator.onLine;
    console.info(`isOnline=[${this.isOnline}]`);
  }
}
