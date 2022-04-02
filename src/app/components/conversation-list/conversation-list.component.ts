import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { conversationListMock } from '../../../mocks/conversation-list.mock';
import { BaseConversationModel } from '../../../models/conversation.model';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss']
})
export class ConversationListComponent implements OnInit {
  public faUser = faUser;
  public list =  conversationListMock;

  public searchTerm: string = '';

  public selectedConversationId: string = '';
  @Output() selectConversation = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onSelectConversation(item: BaseConversationModel) {
    this.selectedConversationId = item.id;
    this.selectConversation.emit(item);
  }
}
