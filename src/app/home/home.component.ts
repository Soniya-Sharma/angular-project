import { Component, Input } from '@angular/core';
import { CalculateService } from '../services/calculate.service';
import { MyYummies } from '../Model/MyYummies';
import { YummiesService } from '../services/yummies.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() catagory = '';
  yummies: MyYummies[] = [];
  searchyummy = '';
  constructor(private yummy: YummiesService) { }

  ngOnInit() {
    // console.log(this.catagory)

    console.log(this.searchyummy);
    // if (this.searchyummy === '' || !this.searchyummy) {

      
      //if catagory is cake then call service method only for cake ...
      this.yummy.getAllYummies().subscribe(
        (data) => {
          if (this.catagory == 'cake') {
            this.yummies = data.filter((f) => f.catagory == 'cake' && f.title?.startsWith(this.searchyummy.toLocaleLowerCase()))
            // this.yummies.filter((f)=>f.title?.startsWith(this.searchyummy))
            // console.log(this.yummies)
            // console.log("ser "+this.searchyummy);
          }
           if (this.catagory == 'cookies')
            this.yummies = data.filter((f) => f.catagory == 'cookies'  && f.title?.startsWith(this.searchyummy.toLocaleLowerCase()))
         if (this.catagory == 'Brownies')
         {
          this.yummies = data.filter((f) => f.catagory == 'Brownies'  && f.title?.startsWith(this.searchyummy.toLocaleLowerCase()))
          console.log(this.searchyummy)
          console.log(this.yummies)
         }
          if(this.catagory=='')
            this.yummies = data.filter((f) =>  f.title?.startsWith(this.searchyummy.toLocaleLowerCase()))
        },
        () => { alert("Problem with server") }
      )
    // }
    // else {
    //   this.yummy.getAllYummies().subscribe((d) => { this.yummies = d });
    //   console.log('in else')
    //   this.yummies = this.yummies.filter(fruit => fruit.title?.startsWith(this.searchyummy.toLocaleLowerCase()));
    //   console.log(this.yummies)
    // }
  }

  onSearchTextChanged(yummyname: string) {
    this.searchyummy = yummyname;
    
    this.ngOnInit();
  }

}
