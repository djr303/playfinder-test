import { Router } from '@angular/router'
import { Component } from '@angular/core';
import { NgbDateStruct }  from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public pitchId: string;
  public starts: NgbDateStruct;
  public ends: NgbDateStruct;

  constructor(public router: Router){}

  public search(): void {
    this.router.navigate([`/${this.pitchId}/${this.starts.year}-${this.starts.month}-${this.starts.day}/${this.ends.year}-${this.ends.month}-${this.ends.day}`]);
  }
}
