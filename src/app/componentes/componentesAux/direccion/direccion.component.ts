import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {
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
