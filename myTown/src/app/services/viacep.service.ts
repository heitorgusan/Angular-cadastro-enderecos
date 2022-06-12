import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class BuscarCEPService {

  constructor(private httpClient: HttpClient) {}

  buscarCEP(cep:string){
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`);
}

}
