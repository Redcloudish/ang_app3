import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-game-list',    // This must match the selector in app.component.ts
  templateUrl: './game-list.component.html',
})
export class GameListComponent implements OnInit {
  genres: string[] = [];
  gamesByGenre: { genre: string; games: Game[] }[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.genres = this.gameService.getGenres();
    this.gamesByGenre = this.genres.map(genre => ({
      genre,
      games: this.gameService.getGamesByGenre(genre),
    }));
  }
}
