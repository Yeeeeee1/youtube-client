import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { mockVideoData } from 'src/assets/data/mockData';
import { ISearchItemModel } from '../../models/search-item.model';
import { ISearchResponseModel } from '../../models/search-response.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-detailed-info-card',
  templateUrl: './detailed-info-card.component.html',
  styleUrls: ['./detailed-info-card.component.scss'],
})
export class DetailedInfoCardComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private youtubeService: YoutubeService) {}

  data: ISearchItemModel = mockVideoData.items[0];

  videoDataSub: Subscription | null = new Subscription();

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.videoDataSub = this.youtubeService.getVideo(params.get('id')).subscribe((data: ISearchResponseModel) => {
        this.data = data.items[0];
      });
    });
  }

  ngOnDestroy(): void {
    if (this.videoDataSub) {
      this.videoDataSub.unsubscribe();
      this.videoDataSub = null;
    }
  }
}
