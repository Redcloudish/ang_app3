import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="game-container">
      <h1>Welcome to Video Game Organizer</h1>
      <div *ngFor="let genre of genres">
        <h2>{{ genre }}</h2>
        <ul>
          <li *ngFor="let game of getGamesByGenre(genre)">
            {{ game.title }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css'],  // This line links the CSS file
})
export class AppComponent implements OnInit {
  genres: string[] = ['Action', 'RPG', 'Strategy'];
  games = [
    { title: 'The Legend of Zelda', genre: 'Adventure' },
    { title: 'Final Fantasy VII', genre: 'RPG' },
    { title: 'Street Fighter V', genre: 'Action' },
    { title: 'Civilization VI', genre: 'Strategy' },
  ];

  getGamesByGenre(genre: string) {
    return this.games.filter(game => game.genre === genre);
  }

  ngOnInit(): void {}
}
