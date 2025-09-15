import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Shell } from '@ih/core/layout/shell';

@Component({
  imports: [RouterModule, Shell],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'interview-hub';
}
