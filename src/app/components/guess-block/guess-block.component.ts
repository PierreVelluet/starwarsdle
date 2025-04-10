import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Univers } from '../../models/univers.enum';

@Component({
  selector: 'app-guess-block',
  imports: [CommonModule],
  templateUrl: './guess-block.component.html',
  styleUrls: ['./guess-block.component.scss'],
  standalone: true,
})
export class GuessBlockComponent {
  @Input() attribute: string | string[] = '';
  @Input() status: string = '';
  @Input() univer: Univers | null = null;
}
