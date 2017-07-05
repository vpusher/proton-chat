import { Component } from '@angular/core';
import { UserService } from './services/users';
import { ChannelService } from './services/channels';
import { OnInit } from '@angular/core';
import {Channel} from "./models/channel";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ChannelService]
})
export class AppComponent implements OnInit {

  public title = 'Proton Chat';
  private userService: UserService;
  private channelService: ChannelService;

  // All the available channels.
  channels = [];

  // Channel being connected to.
  currentChannel = null;

  // Messages of the current channel.
  messages = [];

  constructor(userService: UserService, channelService: ChannelService) {
    this.channelService = channelService;
    this.userService = userService;
  }

  ngOnInit(): void {
    // First get all the channels
    this.channelService.all().then(channels => {
      this.channels = channels;
      // Default channel is the first one.
      this.currentChannel = channels[0];
      // Then you can retrieve messages from a specific channel.
      this.channelService.get(this.currentChannel.id).then(channel => {
        this.messages = channel.messages;
      })
    });
  }
}
