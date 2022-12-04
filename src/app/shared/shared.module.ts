import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { TagButtonComponent } from './components/buttons/tag-button/tag-button.component';
import { QuestionButtonComponent } from './components/buttons/question-button/question-button.component';

@NgModule({
  declarations: [HeaderComponent, TagButtonComponent, QuestionButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, TagButtonComponent, QuestionButtonComponent],
})
export class SharedModule {}
