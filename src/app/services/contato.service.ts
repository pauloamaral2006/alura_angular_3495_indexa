import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';
@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private contatos: Contato[] = [];
  constructor() {
    const contatosLocalStorageString = localStorage.getItem('contatos');
    const contatosLocalStorage = contatosLocalStorageString
      ? JSON.parse(contatosLocalStorageString)
      : null;

    this.contatos = contatosLocalStorage || null;

    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }

  obterContatos() {
    return this.contatos;
  }

  salvarContato(contato: Contato) {
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos));
  }
}
