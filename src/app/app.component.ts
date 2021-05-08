import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateReferanceVariable';
  newpost= 'html';
  addonpost(input:HTMLTextAreaElement){
    // console.dir(input);
    console.log(input.value)
  }
}
