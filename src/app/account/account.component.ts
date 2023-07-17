import { Component, Input } from '@angular/core';
import {LoggingService } from '../logging.service';
import {AccountsService } from '../accounts.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  
  constructor(private loggingServices : LoggingService,
    private accountServices : AccountsService){
    
  }

  onSetTo(status: string) {
    this.accountServices.updateState(this.id,status);
    //console.log('A server status changed, new status: ' + status);
    this.loggingServices.logStatusChange(status);
  }
}
