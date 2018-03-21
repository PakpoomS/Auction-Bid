export interface User{
    userid: string;
    pass : string;
}

export interface Profile{
    name: string;
    card : string;
    phone : string;
    address: string;
    Img : any;
}

export interface Item{
    name : string; // ชื่อสินค้า
    des : string; // ข้อมูลสินค้า
    sort : string; // ประเภทสินค้า
    timeOpen : any; // เวลาเปิด
    timeClosed : any; // เวลาปิด
    priceStart: any; // ราคาเปิดประมูล
    priceBid: any; // ราคาประมูลขั้นต่ำ
    priceEnd : any; // ราคาปิดประมูล
    UID : any; // UID เจ้าของสินค้า
    nameOpen : any; // ชื่อผู้เปิดสินค้า
    winBid : any; 
    Status : any; // การดำเนินการของสินค้า
    priceStatus : any // ราคาประมูลปัจจุบัน
    Delivery : any
}

