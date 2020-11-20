import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../../services/account.service';
import {DirecModel} from '../../../models/direc.model';


@Component({
  selector: 'app-mis-direc',
  templateUrl: './mis-direc.component.html',
  styleUrls: ['./mis-direc.component.css']
})
export class MisDirecComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

}
