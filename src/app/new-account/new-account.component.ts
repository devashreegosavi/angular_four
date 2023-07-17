import { Component} from '@angular/core';
import {LoggingService } from '../logging.service';
import {AccountsService } from '../accounts.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
 
  constructor(private loggingServices : LoggingService,
     private accountServices : AccountsService){
    
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    
    //console.log('A server status changed, new status: ' + accountStatus);
    this.loggingServices.logStatusChange(accountStatus);
    this.accountServices.addAccount(accountName,accountStatus);
  }
}
