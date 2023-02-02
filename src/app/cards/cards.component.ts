import { Component, OnInit } from '@angular/core';
import { ValorantApiService } from 'src/services/valorant-api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  constructor(private valoService: ValorantApiService) {}

  ngOnInit(): void {
    //this.getAgents();
  }

  getAgents() {
    this.valoService.getAgents().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
