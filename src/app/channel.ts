import { Component, Input } from '@angular/core';

@Component({
  selector: 'channel',
  templateUrl: './channel.html',
  //styleUrls: ['./channel.css']
})
export class Channel {
  @Input() title: string;
  @Input() desc: string;
}