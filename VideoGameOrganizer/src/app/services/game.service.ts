import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: Game[] = [
    { id: 1, title: 'The Witcher 3', genre: 'RPG' },
    { id: 2, title: 'Call of Duty', genre: 'FPS' },
    { id: 3, title: 'Super Mario Odyssey', genre: 'Platformer' },
    { id: 4, title: 'Dark Souls III', genre: 'RPG' },
    { id: 5, title: 'Overwatch', genre: 'FPS' },
  ];

  getGames(): Game[] {
    return this.games;
  }

  getGamesByGenre(genre: string): Game[] {
    return this.games.filter(game => game.genre === genre);
  }

  getGenres(): string[] {
    return Array.from(new Set(this.games.map(game => game.genre)));
  }
}
