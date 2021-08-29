import { cardReducer } from './reducers/card.reducer';
import { youtubeReducer } from './reducers/youtube.reducer';

export const AppState = {
  videoData: youtubeReducer,
  cardData: cardReducer,
};
