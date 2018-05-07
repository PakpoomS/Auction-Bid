import { NgModule } from '@angular/core';
import { DatePipe } from './date/date';
import { ReversePipe } from './reverse/reverse';
import { BidPipe } from './bid/bid';
import { TimePipe } from './time/time';

@NgModule({
	declarations: [DatePipe,
    ReversePipe,
    BidPipe,
    TimePipe],
	imports: [
        
    ],
	exports: [DatePipe,
    ReversePipe,
    BidPipe,
    TimePipe]
})
export class PipesModule {}
