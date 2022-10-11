import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { TagButtonComponent } from './components/buttons/tag-button/tag-button.component';

@NgModule({
  declarations: [HeaderComponent, TagButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, TagButtonComponent],
})
export class SharedModule {}
