import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'http-fetch';
  users :any;
  url = 'https://api.github.com/users';
  isLoading = false;
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.isLoading = true;
    this.http.get(this.url).subscribe(res =>{
      this.isLoading = false;
      console.log(res)
      // this.users = res;
      setTimeout(()=>{
        this.users = res;
      }, 3000)
    }, err=>{
      console.log('error')
      console.log(err)
      }, ()=>{
      console.log("gotData")
    })
  }
  goToGithub(url:any){
    window.open(url,"_blank")
  }
}
