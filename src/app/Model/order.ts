export type Order={
    "id"?:number,
            "title"?:string
            "price"?: number,
            "catagory"?: string,
            "firstName"?: string,
            "lastname"?: string,
            "orderdate"?: string,
            "phone"?: string,
            "address"?:{
                "street"?: string,
                "city"?: string,
                "state"?: string,
                "zip"?: string
            }
         
          

}