import { BuscarCEPService } from './../services/viacep.service';
import { Component } from '@angular/core';
import { DBListaService } from '../services/dblista.service';

@Component({
  selector: 'app-nova-cidade',
  templateUrl: './nova-cidade.component.html',
  styleUrls: ['./nova-cidade.component.css'],
})
export class NovaCidadeComponent {
  logradouro: string = '';
  cidade: string = '';
  estado: string = '';

  constructor(private service: BuscarCEPService, private serviceDB: DBListaService) { }

  buscarCEP(cep: string) {
    this.service.buscarCEP(cep).subscribe((resp) => this.addEnderecos(resp));
  }

  addEnderecos(resp: any) {
    this.logradouro = resp.logradouro;
    this.cidade = resp.localidade;
    this.estado = resp.uf;

    const cidade = {

      cep: resp.cep,
      logradouro: resp.logradouro,
      cidade: resp.localidade,
      estado: resp.uf
    }
    console.log(cidade);

    this.serviceDB.addCadastro(cidade).subscribe(resp=>console.log(resp));
  }
}
