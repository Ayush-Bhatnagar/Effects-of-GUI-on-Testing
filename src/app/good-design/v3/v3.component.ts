import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'v3',
  templateUrl: './v3.component.html',
  styleUrls: ['./v3.component.css']
})
export class V3Component {

  @ViewChild('drpwdwn',{static:false}) dropdown: ElementRef;
  @ViewChild('inpt',{static:false}) input: ElementRef;
  faCaretDown = faCaretDown;
    
  constructor(private router: Router) { }

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
