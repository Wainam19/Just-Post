import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  readonly commentURL = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getComment() {
    return this.http.get(this.commentURL);
  }

  getSpecificComment(id: string) {
    let paramId = new HttpParams().set('postId', id);
    return this.http.get(this.commentURL, { params: paramId });
  }

  deleteComment(id: string) {
    return this.http.delete(this.commentURL + `/${id}`);
  }
}
