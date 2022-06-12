import { EnderecoModel } from './../../model/endereco.model';
import { DBListaService } from './../services/dblista.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-lista-cidade',
  templateUrl: "./lista-cidade.component.html",
  styleUrls: ["./lista-cidade.component.css"]
})

export class ListaCidadeComponent implements OnInit {
  listaCadastro: any[] = [];
  constructor(private service: DBListaService) {

  }

  ngOnInit(): void {


    this.service.retornarlistaCompletaDBJson().subscribe((enderecos: EnderecoModel[]) => {
      this.listaCadastro = enderecos;
    })
  }

}
