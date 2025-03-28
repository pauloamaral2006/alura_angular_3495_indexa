import { Injectable } from '@angular/core';
import { Contato } from '../componentes/contato/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  private readonly API: string = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {}

  obterContatos() {
    return this.http.get<Contato[]>(this.API);
  }

  private salvarContato(contato: Contato) {
    return this.http.post<Contato>(this.API, contato);
  }

  buscarPorId(id: number): Observable<Contato> {
    const url = `${this.API}/${id}`;
    return this.http.get<Contato>(url);
  }

  excluirContato(id: number): Observable<Contato> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Contato>(url);
  }

  private editarContato(contato: Contato): Observable<Contato> {
    const url = `${this.API}/${contato.id}`;
    return this.http.put<Contato>(url, contato);
  }

  editarOuSalvarContato(contato: Contato) {
    if (contato.id) {
      return this.editarContato(contato);
    } else {
      return this.salvarContato(contato);
    }
  }
}
