import { Injectable,Pipe } from '@angular/core';

/**
 * Generated class for the DatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name:'datePipe',
})
export class DatePipe {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value,args ? ) {
    var days = Math.floor(value / (1000 * 60 * 60 * 24));
    var hours = Math.floor((value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((value % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((value  % (1000 * 60)) / 1000);
    if(value > 0){
    return "ปิดประมูลอีก : " + days + " วัน " + hours + " ชั่วโมง " + minutes + " นาที " + seconds + " วินาที "
    }else if (value < 0 ){
    return "หมดเวลาการประมูล" 
    }else 
    return "กำลังโหลดเวลา กรุณารอซักครู่"
  }
}
