import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './datePicker.component.html',
  styleUrls: ['./datePicker.component.scss']
})
export class DatePickerComponent {
  model: NgbDateStruct;
}
