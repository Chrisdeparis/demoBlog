import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  

  post: {
    title: string,
    content: string,
    loveIts: boolean,
    created_at: Date
  } 
  
  loveIts = 0;
  postStatus = this.loveIts;
  console.log(this.loveIts);
  posts = [
    {
      title: "Mon premier post",
      content: 'content post 1'
      
    },
    {
      title: "Mon deuxieme post",
      content: 'content post 2'
    },
    {
      title: "Mon troisieme post",
      content: 'content post 3'
    },
  ];

  onLoveIt(){
    console.log(this.loveIts = this.loveIts + 1);
  }
  dontLoveIt(){
    console.log(this.loveIts = this.loveIts -1);
  }
  // postName = 'titre du post';


  getStatus() {
    return this.loveIts;
  }

  getColor() {
    if( this.loveIts +1 > 0) {
      return 'green';
    } else if(this.loveIts +1 <= 0) {
      return 'red';
    }
  }

  
  
  

  

}
