import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addCard } from 'src/app/ngrx/actions/card.action';
import { ICardModel } from 'src/app/shared/models/CardModel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  title = '';
  description = '';
  urlToImage = '';
  urlToVideo = '';
  constructor(private store: Store) {}

  addCard(): void {
    const cardData: ICardModel[] = [
      {
        title: this.title,
        description: this.description,
        urlToImage: this.urlToImage,
        urlToVideo: this.urlToVideo,
        date: Date.now(),
      },
    ];
    this.store.dispatch(addCard({ cardData }));
  }
}
