import { Component, OnInit } from '@angular/core';
import { GameComponent } from '../game/game.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './Messages.component.html',
  styleUrls: ['./Messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService, public game: GameComponent) { }

  ngOnInit() { }

  historyItemClick(item: any) {
    console.log(item);
  }
}
