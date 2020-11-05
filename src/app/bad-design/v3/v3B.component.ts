import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'v3',
  templateUrl: './v3B.component.html',
  styleUrls: ['./v3B.component.css']
})
export class V3BComponent {

    contactStatusText: string;
    amountStatusText: string;
    urlStatusText: string;
    domainPrefix: string;

    constructor(private router: Router) {
      this.contactStatusText = "";
      this.amountStatusText = "";
      this.urlStatusText = "";
      this.domainPrefix = "https://domain3.com/users/";
    }

    inputMobile($event) {
      this.contactStatusText = "";
      if($event.keyCode == 13) {
        let value = $event.currentTarget.value;
        let numericValue = parseInt(value);
        if(numericValue == NaN || numericValue == undefined) {this.amountStatusText = "Rejected"; }
        else if(value.length!=12) { this.contactStatusText = "Rejected"}
        else if(value < 0) { this.contactStatusText = "Rejected"; }
        else this.contactStatusText = "Accepted";
      }
    }

    inputAmount($event) {
      this.amountStatusText = "";
      if($event.keyCode == 13) {
        let value = parseInt($event.currentTarget.value);
        if(value == NaN || value == undefined) {this.amountStatusText = "Rejected"; }
        else if(value<=1500 && value>=0) { this.amountStatusText = "Accepted"; }
        else this.amountStatusText = "Rejected";
        
      }
    }

    inputUrl($event) {
        this.urlStatusText = "";
        if($event.keyCode == 13) {
          let url = $event.currentTarget.value;
          if(url.toLowerCase().indexOf(this.domainPrefix.toLowerCase())!=0) { this.urlStatusText = "Rejected";}
          else this.urlStatusText = "Accepted";
        }
    }

}
