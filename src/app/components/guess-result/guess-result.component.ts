import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuessBlockComponent } from '../guess-block/guess-block.component';
import { Character } from '../../models/swCharacter.model';
import { GuessHeader } from '../../models/guess-header.model';
import { Univers } from '../../models/univers.enum';

@Component({
    selector: 'app-guess-result',
    imports: [CommonModule, GuessBlockComponent],
    templateUrl: './guess-result.component.html',
    styleUrls: ['./guess-result.component.scss'],
    standalone: true
})
export class GuessResultComponent {
  @Input() guessedCharacters: Character[] = [];
  @Input() headers: GuessHeader[] = [];
  @Input() target!: Character;
  @Input() univer: Univers | null = null;
}
