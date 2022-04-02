import { Pipe, PipeTransform } from '@angular/core';
import { BaseConversationModel } from '../../models/conversation.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: BaseConversationModel[], searchTerm: string): BaseConversationModel[] {
    return value.filter((item) => {
      return searchTerm
        ? item.participants[1].username.toLowerCase().includes(searchTerm.toLowerCase())
        : value;
    });
  }
}
