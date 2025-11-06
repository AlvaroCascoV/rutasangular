import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tabla.multiplicar',
  standalone: false,
  templateUrl: './tabla.multiplicar.component.html',
  styleUrl: './tabla.multiplicar.component.css',
})
export class TablaMultiplicarComponent implements OnInit {
  public numero: number;
  public resultados: Array<number>;
  constructor(private _activatedRoute: ActivatedRoute) {
    this.numero = 0;
    this.resultados = new Array<number>();
  }
  ngOnInit(): void {
    this._activatedRoute.params.subscribe((parametros: Params) => {
      if (parametros['numero'] != null) {
        this.numero = parseInt(parametros['numero']);
        this.generarTabla();
      }
    });
  }
  generarTabla(): void {
    let aux = new Array<number>();
    for (let i = 1; i <= 10; i++) {
      this.numero = this.numero;
      let operacion = this.numero * i;
      aux.push(operacion);
    }
    this.resultados = aux;
  }
}
