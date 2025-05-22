import { Component, OnInit } from '@angular/core';
import { GetItemService } from '../../service/get-item.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {
  items: any[] = [];
  editForm: FormGroup;
  selectedItemId: string | null = null;
  isEditing: boolean = false;
  isTechnicianView: boolean = false;

  constructor(
    private getItemService: GetItemService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      itemName: ['', [Validators.required, Validators.minLength(3)]],
      itemQuantity: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      itemUnit: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      itemDate: ['', Validators.required]
    });
    this.isTechnicianView = this.router.url.includes('app-technician-page');
  }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems(): void {
    this.getItemService.getItem().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (error) => {
        console.error('Error fetching items:', error);
      }
    });
  }

  editItem(itemId: string): void {
    this.selectedItemId = itemId;
    this.getItemService.getItemById(itemId).subscribe({
      next: (item) => {
        this.editForm.patchValue({
          itemName: item.itemName,
          itemQuantity: item.itemQuantity,
          itemUnit: item.itemUnit,
          itemDate: item.itemDate
        });
        this.isEditing = true;
      },
      error: (error) => {
        console.error('Error fetching item:', error);
        alert('Failed to load item data');
      }
    });
  }

  closeEditDialog(): void {
    this.isEditing = false;
    this.selectedItemId = null;
    this.editForm.reset();
  }

  updateItem(): void {
    if (this.editForm.valid && this.selectedItemId) {
      const itemData = this.editForm.value;
      this.getItemService.updateItemById(this.selectedItemId, itemData).subscribe({
        next: (response) => {
          alert('Item updated successfully');
          this.closeEditDialog();
          this.fetchItems(); // Refresh the list
        },
        error: (error) => {
          console.error('Error updating item:', error);
          alert('Failed to update item');
        }
      });
    }
  }
}