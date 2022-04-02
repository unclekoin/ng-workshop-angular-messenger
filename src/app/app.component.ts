import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  BaseConversationModel,
  SelectedConversationModel
} from '../models/conversation.model';
import {
  selectedConversationsMock
} from '../mocks/selected-conversations.mock';
import { MessageSendRequestModel } from '../models/message.model';
import { currentUserMock } from '../mocks/currnt-user.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Angular Messenger';
  public faCoffee = faCoffee;
  public selectedConversation: SelectedConversationModel | undefined;

  public onSelectedConversation(conversation: BaseConversationModel) {
    this.selectedConversation =
      selectedConversationsMock.find((item) => item.id === conversation.id)
  }

  public onPostMessage(newMessage: MessageSendRequestModel) {
    this.selectedConversation?.messages.push({
      recipient: newMessage.recipient,
      sender: currentUserMock.id,
      timestamp: new Date().toISOString(),
      message: newMessage.message,
      id: Date.now().toString(),
    })
  }
}
