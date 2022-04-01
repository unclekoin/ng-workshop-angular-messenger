import { Component, OnInit } from '@angular/core';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss']
})
export class ConversationListComponent implements OnInit {
  public faUser = faUser;
  public faMagnifyingGlass = faMagnifyingGlass;
  constructor() { }

  ngOnInit(): void {
  }

}
