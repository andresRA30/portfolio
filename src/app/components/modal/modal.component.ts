import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Portfolio } from '../../interfaces/portfolio.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnChanges {
  @Input() portfolio!: Portfolio;

  constructor() {
    console.log("wqdieiuhde3ickew")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.portfolio)
  }


}
