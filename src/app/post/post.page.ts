import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostService } from '../shared/services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  post: any = [];
  postTitle: any = [];
  filteredPost: any = [];
  selectedTitle: String;
  p: number = 1;

  constructor(
    private postService: PostService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.getPostData();
  }

  getPostData() {
    this.postService.getPost().subscribe((res) => {
      if (res) {
        this.post = res;
        this.postTitle = res;
      } else {
        console.log('There is an error occur, Please try again');
      }
    });
  }

  getFilteredPost(title: string) {
    this.postService.getSpecificPost(title).subscribe((res) => {
      this.post = res;
    });
  }

  async deletePostToaster() {
    const toast = await this.toastCtrl.create({
      message: 'Post Deleted',
      duration: 2000,
    });
    toast.present();
  }

  delete(id: string) {
    this.postService.deletePost(id).subscribe(() => {
      this.deletePostToaster();
    });
  }

  reset() {
    this.selectedTitle = '';
    this.getPostData();
  }
}
