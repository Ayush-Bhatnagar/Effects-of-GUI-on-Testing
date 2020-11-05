import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'v1',
  templateUrl: './v1.component.html',
  styleUrls: ['./v1.component.css']
})
export class V1Component {

   @ViewChild('drpwdwn',{static:false}) dropdown: ElementRef;
   @ViewChild('inpt',{static:false}) input: ElementRef;
   faCaretDown = faCaretDown;

    constructor(private router: Router) {
    }

    toggle() {
      this.dropdown.nativeElement.classList.toggle("show");
    }

    filter() {
      let filter = this.input.nativeElement.value.toUpperCase();
      debugger;
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

}
