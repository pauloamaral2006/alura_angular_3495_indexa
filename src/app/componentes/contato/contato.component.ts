import { Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contato',
  imports: [RouterLink],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css',
})
export class ContatoComponent {
  @Input() nome: string = '';
  @Input() telefone: string = '';
  @Input() id?: number;
  @Input() avatar: string | ArrayBuffer = '';
}
