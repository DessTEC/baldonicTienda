import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AccountService} from '../../../services/account.service';
import {DirecModel} from '../../../models/direc.model';
@Component({
  selector: 'app-cambiar-dir',
  templateUrl: './cambiar-dir.component.html',
  styleUrls: ['./cambiar-dir.component.css']
})
export class CambiarDirComponent implements OnInit {

  otrasDirec: Observable<DirecModel[]>

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.otrasDirec=this.accountService.getUserAddresses();
  }

}
