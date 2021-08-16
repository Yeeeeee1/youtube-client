import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-detailed-info-card',
  templateUrl: './detailed-info-card.component.html',
  styleUrls: ['./detailed-info-card.component.scss'],
})
export class DetailedInfoCardComponent implements OnInit {
  constructor(private route: ActivatedRoute, private youtubeService: YoutubeService) {}

  data: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.data = this.youtubeService.getData().items.find((value) => value.id === params.get('id'));
    });
  }
}
