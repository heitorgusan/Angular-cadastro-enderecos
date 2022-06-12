import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { EnderecoModel } from "src/model/endereco.model";

@Injectable({
  providedIn:'root'
})

export class DBListaService{
  url:string = 'http://localhost:3000/cadastros';

  constructor(private httpClient : HttpClient){

  }
  addCadastro(cadastroCidade : EnderecoModel):Observable<EnderecoModel>{
    return this.httpClient.post<EnderecoModel>(this.url,cadastroCidade);
  }
  retornarlistaCompletaDBJson(): Observable<EnderecoModel[]> {
    return this.httpClient.get<EnderecoModel[]>(this.url);
  }
}
