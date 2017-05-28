import { Component } from '@angular/core';
import { Channel } from './channel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  CHANNELS: Channel[] = [
    {title: 'Channel 1', desc: 'Desc 1'},
    {title: 'Channel 2', desc: 'Desc 2'}
  ];
  title = 'Project';
}

