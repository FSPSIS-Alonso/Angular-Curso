import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcatPipe } from './concat.pipe';
import { GetUrlPipe } from './get-url.pipe';

@NgModule({
  declarations: [ConcatPipe, GetUrlPipe],
  imports: [CommonModule],
  exports: [ConcatPipe, GetUrlPipe],
})
export class PipesModule {}
