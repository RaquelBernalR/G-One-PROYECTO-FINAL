import { Component, OnInit } from '@angular/core';
import { DProductoService } from 'src/app/service/d-producto.service';
import { PeticionService } from 'src/app/service/peticion.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private peticion:PeticionService, public carrito:DProductoService) { }

  ngOnInit(): void {

  }

  id:string='';
  talla:string='';
  

  Disminuir(id:string,talla:string){
    this.carrito.Disminuir(id,talla);
  }


  Aumentar(id:string,talla:string){
    this.carrito.Aumentar(id,talla);
  }

  QuitarItem(id:string,talla:string){
    this.carrito.QuitarItem(id,talla);
  }
  
}
