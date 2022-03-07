import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CommentService } from '../shared/services/comment/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {
  comment: any = [];
  p: number = 1;
  searchKey: any;

  constructor(
    private commentService: CommentService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.getCommentData();
  }

  getCommentData() {
    this.commentService.getComment().subscribe((res) => {
      if (res) {
        this.comment = res;
      } else {
        console.log('There is an error occur, Please try again');
      }
    });
  }

  getSearchComment(e: any) {
    if (e.target.value) {
      this.searchKey = e.target.value;
      this.commentService
        .getSpecificComment(this.searchKey)
        .subscribe((res) => {
          this.comment = res;
        });
    } else {
      this.getCommentData();
    }
  }

  async deleteCommentToaster() {
    const toast = await this.toastCtrl.create({
      message: 'Comment Deleted',
      duration: 2000,
    });
    toast.present();
  }

  delete(id: string) {
    this.commentService.deleteComment(id).subscribe(() => {
      this.deleteCommentToaster();
    });
  }
}
