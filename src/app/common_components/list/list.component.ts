import { Component, HostListener, Input, OnInit } from '@angular/core';
import { CardSchema } from '../schemas/cardSchema';
import { ListSchema } from '../schemas/listSchema';
import { CardStore } from '../schemas/cardStore';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list: ListSchema;
  @Input() cardStore: CardStore;

  constructor() { 
   }

  ngOnInit() {
      //const cardId = this.cardStore.newCard("Orçamento",  "data[i]._id", "data[i].defeito", "data[i].nome", "data[i].telPrimario", new Date("01/01/2000") , "data[i].periodo", "data[i].endereco", "data[i].marca", "data[i].modelo", "data[i].telSecundario", "data[i].email", null, null, null, null, null, null);
      //const cardIdd = this.cardStore.newCard("Orçamento",  "data[i]._id", "data[i].defeito", "data[i].nome", "data[i].telPrimario", new Date("02/01/2000") , "data[i].periodo", "data[i].endereco", "data[i].marca", "data[i].modelo", "data[i].telSecundario", "data[i].email", null, null, null, null, null, null);
      //const cardIddd = this.cardStore.newCard("Orçamento",  "data[i]._id", "data[i].defeito", "data[i].nome", "data[i].telPrimario", new Date("03/01/2000") , "data[i].periodo", "data[i].endereco", "data[i].marca", "data[i].modelo", "data[i].telSecundario", "data[i].email", null, null, null, null, null, null);
      
      //const cardIdd = this.cardStore.newCard("Atendimento", "Lucas Araújo", "(41) 9979 19187", new Date("October 13, 2014 11:13:00"), " | Tarde", "Avenida Silva Jardim, 314 - Rebouças - Curitiba");
      //const cardIddd = this.cardStore.newCard("Atendimento", "Lucas Araújo", "(41) 9979 19187", new Date("October 13, 2014 11:13:00"), " | Tarde", "Avenida Silva Jardim, 314 - Rebouças - Curitiba");
      //this.list.cards.push(cardId);
      //this.list.cards.push(cardIdd);
      //this.list.cards.push(cardIddd);
  }

  allowDrop($event) {
    $event.preventDefault();
  }

  dragStart($event) {
/*    var index = this.list.cards.indexOf($event.target.id);
    if (index > -1) {
      this.list.cards.splice(index, 1);
    }*/

    $event.dataTransfer.setData('text',this.list.id + $event.dataTransfer.getData('text'));
  }

  drop($event) {
    $event.preventDefault();
     
/*    const data = $event.dataTransfer.getData('text');

    $event.dataTransfer.setData('text', $event.target.id);

    let target = $event.target;
    const targetClassName = target.className;


    while (target.className !== 'list') {
      target = target.parentNode;
    }

    this.list.cards.push(data);
    
    window.alert( this.list.cards );
*/
  }


  compare(a,b) {
      if (a.id < b.id)
        return -1;
      if (a.id > b.id)
        return 1;
      return 0;
  }


}
