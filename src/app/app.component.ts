import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name:string = '';
  age:number;
  found:boolean;

  constructor(private http: HttpClient){}

  onNameKeyup(e: any){
    this.name = e.target.value;
    this.found = false;
  }

  getProfile(){
    this.http.get(`https://my-json-server.typicode.com/VisheshSingh/json-faker-directory/profiles/?name=${this.name}`)
      .subscribe((data:any[]) => {
        if(data.length){
          this.age = data[0].age;
          this.found = true;

        }
      })
  }

  postProfile(){
    this.http.post(`https://my-json-server.typicode.com/VisheshSingh/json-faker-directory/profiles/`, {
      name: "james",
      age: 26
    })
      .subscribe((data:any) => {
        console.log(data);
      })
  }
}
