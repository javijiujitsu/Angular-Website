import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-jumbotron',
  templateUrl: './my-jumbotron.component.html',
  styleUrls: ['./my-jumbotron.component.css']
})
export class MyJumbotronComponent implements OnInit {
  private jbtText:string;
  private jbtBtnText:string;
  private jbtBtnUrl: string;

  constructor() {
      this.jbtText = "I am a passionate Web Developer and IT Recruiter who constantly challenges himself to improve and excel.";
      this.jbtBtnText ="Read More";
      this.jbtBtnUrl ="/about";


}
  ngOnInit() {
  }

}
