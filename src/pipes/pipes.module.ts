import { NgModule } from '@angular/core';
import { DatePipe } from './date/date';
import { ReversePipe } from './reverse/reverse';
@NgModule({
	declarations: [DatePipe,
    ReversePipe],
	imports: [],
	exports: [DatePipe,
    ReversePipe]
})
export class PipesModule {}
