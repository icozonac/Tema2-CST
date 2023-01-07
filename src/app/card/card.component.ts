import { SuccessModalComponent } from '../success-modal/success-modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { ModalComponent } from './../modal/modal.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() name: string = 'default';
  @Input() photoUrl: string = '';

  //Trebuie sa pun valoarea inputului pentru afisarea corecta a modalului de succes
  inputValue: number = 1;

  constructor(private modalService: NzModalService) {}

  ngOnInit(): void {}

  openModal() {
    this.modalService.create({
      nzContent: ModalComponent,
      nzTitle: this.name,
      nzOnOk: () => {
        // Open the success modal and pass the input value to the success modal
        this.modalService.success({
          nzTitle: 'Success!',
          nzContent: SuccessModalComponent,
          nzComponentParams: {
            inputValue: this.inputValue,
          },
        });
      },
    });
  }
}
