import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_Models/User';
import { UserService } from 'src/app/_Services/User.service';
import { AlertifyService } from 'src/app/_Services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-memer-detailed',
  templateUrl: './memer-detailed.component.html',
  styleUrls: ['./memer-detailed.component.scss']
})
export class MemerDetailedComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private userService: UserService, private alertifyService: AlertifyService, private route: ActivatedRoute ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.user = data['User'];
    });
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false,
        thumbnailsColumns: 4,
      }
    ];
    this.galleryImages = this.getImages();
  }

  // tslint:disable-next-line: typedef
  getImages(){
    const imageUrl = [];
    for (const photo of this.user.photos)
    {
      imageUrl.push({
        small: photo.url,
        medium: photo.url,
        large: photo.url,
        description: photo.description
      });
      return imageUrl;
    }
  }
  // tslint:disable-next-line: typedef
  loaduser(){
    console.log('loaduser method');
    // tslint:disable-next-line: no-string-literal
    return this.userService.getUser(+ this.route.snapshot.params['id']).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertifyService.error(error);
    });
  }

}
