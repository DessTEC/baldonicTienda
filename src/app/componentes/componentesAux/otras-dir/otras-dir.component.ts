import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-otras-dir',
  templateUrl: './otras-dir.component.html',
  styleUrls: ['./otras-dir.component.css']
})
export class OtrasDirComponent implements OnInit {
  @Input() street: string;
  @Input() city: string;
  @Input() state: string;
  @Input() zip_code: string;
  @Input() country: string;
  @Input() phone_number: number;
  @Input() instructions: string;
  constructor() { }

  ngOnInit(): void {
  }

}
