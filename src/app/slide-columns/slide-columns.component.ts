import { Component, OnInit } from '@angular/core';
import { ValorantApiService } from 'src/services/valorant-api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-slide-columns',
  templateUrl: './slide-columns.component.html',
  styleUrls: ['./slide-columns.component.css'],
})
export class SlideColumnsComponent implements OnInit {
  baseMediaUrl = environment.baseMediaUrl;
  mapsUrl = environment.mapsUrls;
  constructor(private valoService: ValorantApiService) {}

  ngOnInit(): void {
    //    this.getMediaMap();
  }

  getMediaMap() {
    this.valoService.getMediaMap(this.mapsUrl.fracture).subscribe(
      (res) => {
        res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
