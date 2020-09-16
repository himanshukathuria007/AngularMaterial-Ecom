import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productFormGroup:FormGroup;
  productdescriptionFG:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.productFormGroup = this.fb.group({
      productname:['',Validators.required],
      productimg:['',Validators.required]
    });

this.productdescriptionFG =this.fb.group({
  productquantity:['', Validators.required],
  productdescription:['',Validators.required]
});

  }


  form1(){
    console.log(this.productFormGroup.value);
  }

  form2(){
    console.log(this.productdescriptionFG.value);
  }
}
