import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Output() inputValueEmitter = new EventEmitter<number>();
  inputValue: number = 1;

  constructor() {}

  onInputValueChange(value: number) {
    this.inputValueEmitter.emit(value);
  }
}
