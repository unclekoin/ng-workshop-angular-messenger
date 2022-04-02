import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectedConversationModel } from '../../../models/conversation.model';
import {
  ConversationMessageModel,
  MessageSendRequestModel
} from '../../../models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() selectedConversation: SelectedConversationModel | undefined;
  @Output() postMessage = new EventEmitter<MessageSendRequestModel>();

  public newMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public getUser(message: ConversationMessageModel) {
    return this.selectedConversation?.participants.find((user) => user.id === message.sender)
  }

  public onPostMessage() {
    this.postMessage.emit({
      message: this.newMessage,
      recipient: this.selectedConversation?.participants[1].id  || '',
    });
    this.newMessage = '';
  }

}
