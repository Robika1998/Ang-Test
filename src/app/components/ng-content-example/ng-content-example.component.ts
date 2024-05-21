import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ng-content-example',
  templateUrl: './ng-content-example.component.html',
  styleUrl: './ng-content-example.component.css'
})
export class NgContentExampleComponent {
  showModal: boolean = false;
  @Output() confirmed = new EventEmitter<void>();

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  confirm() {
    this.confirmed.emit();
    this.closeModal();
  }
}
