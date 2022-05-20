import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
  
      {
        title: 'My pic',
        description: 'pics!',
        imageUrl: 'https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ',
        createdDate: new Date(),
        snaps: 0
      },

      {
        title: 'Archibald',
        description: 'Archibald pics!',
        imageUrl: 'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
        createdDate: new Date(),
        snaps: 0,
        location: "Montreal"
      },
  
      {
        title: 'Beautiful',
        description: 'Beautiful pics!',
        imageUrl: 'https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g',
        createdDate: new Date(),
        snaps: 0
      },
  
      {
        title: 'Wow',
        description: 'wow pics!',
        imageUrl: 'https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo',
        createdDate: new Date(),
        snaps: 0
      },

    ];
  }
}


