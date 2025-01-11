import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  ItemService } from '../../service/add-item.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  addItemForm: FormGroup;
  

  constructor(private fb: FormBuilder, private router: Router, private itemService: ItemService) {
    this.addItemForm = this.fb.group({
      itemName: ['', [Validators.required, Validators.minLength(3)]],
      itemQuantity: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      itemUnit: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      itemDate: ['', Validators.required],
      // image: [null, Validators.required]
    });
  }


addItem(){
  if(this.addItemForm.value)
   this.itemService.addItem(this.addItemForm.value).subscribe({
  next:(val:any)=>{
    alert("item  successfully")
    this.addItemForm.reset()
    this.router.navigate(['/app-store-kepper-page/app-item'])
  }
  })
}
}
