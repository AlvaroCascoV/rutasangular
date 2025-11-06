import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menutabla',
  standalone: false,
  templateUrl: './menu.tabla.multiplicar.component.html',
  styleUrl: './menu.tabla.multiplicar.component.css',
})
export class MenuTablaMultiplicarComponent implements OnInit {
  public numeros: Array<number>;
  constructor() {
    this.numeros = new Array<number>();
  }
  ngOnInit(): void {
    for (let i = 1; i <= 6; i++) {
      let alea = Math.floor(Math.random() * 100) + 1;
      this.numeros.push(alea);
    }
  }
}
