import { Component } from '@angular/core';
import { Channel } from './channel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  channels = [
      new Channel('Channel 1', 'Desc 1'),
      new Channel('Channel 2', 'Desc 2')
  ];
  title = 'Project';
}

