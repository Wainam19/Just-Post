import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  readonly postURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get(this.postURL);
  }

  getSpecificPost(title: string) {
    let paramTitle = new HttpParams().set('title', title);
    return this.http.get(this.postURL, { params: paramTitle });
  }

  deletePost(id: string) {
    return this.http.delete(this.postURL + `/${id}`);
  }
}
