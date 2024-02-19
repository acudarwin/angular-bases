import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }];

  /*@Output()
  public onDelete: EventEmitter<number> = new EventEmitter();*/

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();


  /*onDeletedCharacter(index: number): void {
    // Emitir el id del personaje a eliminar
    this.onDelete.emit(index);
  }*/

  onDeleteById(id?: string): void {
    if (!id) return;
    this.onDeleteId.emit(id);
  }
}
