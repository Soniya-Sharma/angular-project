import { Component,ViewChild } from '@angular/core';
import { UploadorderService } from '../services/uploadorder.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-orderreport',
  templateUrl: './orderreport.component.html',
  styleUrls: ['./orderreport.component.css']
})


export class OrderreportComponent {
    displayedColumns: string[] = ['title', 'price', 'catagory', 'firstName','orderdate','phone','address.state','address.city'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  
  constructor(private myser:UploadorderService){}

  ngOnInit(){
    this.myser.getOrderDetails().subscribe(
      (data)=>{
      this.dataSource=new MatTableDataSource(data);
      console.log(this.dataSource)
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
      },
    ()=>{alert("server problem")});
  }

  applyFilter(filtervalue:string){
    this.dataSource.filter=filtervalue.trim().toLowerCase();
  }


}
