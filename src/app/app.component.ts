import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post } from './models/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
  constructor(private http: HttpClient){}
  allPosts:Post[] = [];
  formPost:Post = {} as Post;

  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
    this.http.get<Post[]>("https://webapplication220240705003824.azurewebsites.net/api/post")
    .subscribe((response:Post[])=> {
      this.allPosts = response;
    });
  }

  addPost(){
    this.http.post<void>("https://webapplication220240705003824.azurewebsites.net/api/post", this.formPost)
    .subscribe(() =>{
      this.getPosts();
    })
  }
}
