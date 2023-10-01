import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { YummiesService } from '../services/yummies.service';
import { MyYummies } from '../Model/MyYummies';
import { UploadorderService } from '../services/uploadorder.service';
import { Order } from '../Model/order';

@Component({
  selector: 'app-orderyummy',
  templateUrl: './orderyummy.component.html',
  styleUrls: ['./orderyummy.component.css']
})
export class OrderyummyComponent {
  maxDate: Date = new Date();

  orderForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    orderdate: ['', Validators.required],
    phone: ['', [Validators.pattern(/^[789]\d{9,9}$/)]],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar,
     private ar: ActivatedRoute,private myser:YummiesService, private uploadorder:UploadorderService) 
  
  { this.maxDate.setDate(this.maxDate.getDate() + 1); }

  get firstName() { return this.orderForm.get("firstName") }

  get lastName() { return this.orderForm.get("lastName") }

  get orderdate() { return this.orderForm.get("orderdate") }

  get phone() { return this.orderForm.get("phone"); }

  selectedyummy: any;
yummydetails:MyYummies={};

  ngOnInit(): void {
    this.ar.paramMap.subscribe((p: ParamMap) => {
      this.selectedyummy = p.get('id');
      this.myser.getAllYummies().subscribe((data)=>{
        this.yummydetails=data.filter((f)=>f.id==this.selectedyummy)[0]
        console.log(this.yummydetails)
      })
    })
  }
myorder:Order={};
  onSubmit(): void {
    this.myorder=<Order>this.orderForm.value;
    this.myorder.title=this.yummydetails.title;
    this.myorder.price=this.yummydetails.price;
    this.myorder.catagory=this.yummydetails.catagory;
    this.myorder.orderdate=this.myorder.orderdate?.toLocaleString();
    console.log(this.orderForm.value);
    this._snackBar.open('Congrats!! We will serve you soon ', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
    this.orderForm.reset();

this.uploadorder.uploadOrder(this.myorder).subscribe(
  (d)=>{alert("Your order will reach soon!")},
()=>{alert("server error!")})
// window.location.reload();
  }


  canExit()
  { 
    if(this.firstName.value || this.lastName.value  )
     {
      return confirm('Do you want to exit?');
      }
    else
    return true;
  }

}
