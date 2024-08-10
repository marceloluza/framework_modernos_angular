import { Injectable } from '@angular/core';
import { Cliente } from '../../cliente/model/cliente.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  salvar(cliente: Cliente) : Observable<Cliente> {
    return this.httpClient.post('http://localhost:8080/api/cliente', cliente);
  }
}
