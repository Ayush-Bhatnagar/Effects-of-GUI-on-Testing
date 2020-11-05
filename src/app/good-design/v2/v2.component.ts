import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'v2',
  templateUrl: './v2.component.html',
  styleUrls: ['./v2.component.css']
})
export class V2Component {

  @ViewChild('drpwdwn',{static:false}) dropdown: ElementRef;
  @ViewChild('inpt',{static:false}) input: ElementRef;
  faCaretDown = faCaretDown;
  contactStatusText: string;
  amountStatusText: string;
  urlStatusText: string;
  
  constructor(private router: Router) { 
      this.contactStatusText = "";
      this.amountStatusText = "";
      this.urlStatusText = "";
  }

  toggle() {
    this.dropdown.nativeElement.classList.toggle("show");
  }

  filter() {
    let filter = this.input.nativeElement.value.toUpperCase();
    let listItems = this.dropdown.nativeElement.getElementsByTagName("a");
    for (let i = 0; i < listItems.length; i++) {
      let txtValue = listItems[i].textContent || listItems[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        listItems[i].style.display = "block";
      } else {
        listItems[i].style.display = "none";
      }
    }
  }

  inputMobile($event) {
    this.contactStatusText = "";
    if($event.keyCode == 13) {
      let value = $event.currentTarget.value;
      if(value.length!=10) { this.contactStatusText = "Rejected"}
      else this.contactStatusText = "Accepted";
    }
  }

  inputAmount($event) {
    this.amountStatusText = "";
    if($event.keyCode == 13) {
      let value = parseInt($event.currentTarget.value);
      if(value<=1000) { this.amountStatusText = "Accepted"; }
      else this.amountStatusText = "Rejected";
      
    }
  }

  inputUrl($event) {
      this.urlStatusText = "";
      if($event.keyCode == 13) {
        this.urlStatusText = "Accepted";
      }
  }

}
