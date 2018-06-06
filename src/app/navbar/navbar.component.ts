import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).scroll( function() {
    if( $(this).scrollTop() > 50) {
        $("#logo").hide();
    }
    else {
        $("#logo").show();
    }
});
  }

}
