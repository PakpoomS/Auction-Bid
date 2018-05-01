import { NgModule } from '@angular/core';
import { DatePipe } from './date/date';
import { ReversePipe } from './reverse/reverse';
import { BidPipe } from './bid/bid';

@NgModule({
	declarations: [DatePipe,
    ReversePipe,
    BidPipe],
	imports: [],
	exports: [DatePipe,
    ReversePipe,
    BidPipe]
})
export class PipesModule {}
