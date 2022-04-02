import { Component, Input, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ConversationMessageModel } from '../../../models/message.model';
import { UserModel } from '../../../models/user.model';
import { currentUserMock } from '../../../mocks/currnt-user.mock';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  public faUser = faUser;

  @Input() message: ConversationMessageModel | undefined;
  @Input() user: UserModel | undefined;

  public currentUser = currentUserMock

  constructor() { }

  ngOnInit(): void {
  }

}
