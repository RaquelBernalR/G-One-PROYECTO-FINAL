import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DProductoService {
  local: any = "";
  public carrito:any[]=[]
  constructor( ) {}

  public agregaralcarrito(id:string, talla:string, cantidad:number,nombre:string,precio:string,imagen:string){
    var posicion = this.carrito.findIndex((elemento) => (elemento.id == id && elemento.talla == talla))
    if (posicion == -1){
      this.carrito.push({id:id, talla:talla, cantidad:cantidad,nombre:nombre,precio:precio,imagen:imagen})

    }
    else{
      this.carrito[posicion].cantidad += cantidad
    }
    console.log(this.carrito)
    localStorage.setItem('carrito', JSON.stringify(this.carrito))
    this.CalcularTotales()

  }


  cargardatos(){
    this.local = localStorage.getItem('carrito')
    console.log(this.local)
    if(this.local == null || this.local == undefined ){
      this.carrito = [];
    }
    else{
      this.carrito = JSON.parse(this.local)
      this.CalcularTotales()

    }
  }

  Aumentar(id:string, talla:string) {
    var posicion = this.carrito.findIndex((elemento) => (elemento.id == id && elemento.talla == talla))
    this.carrito[posicion].cantidad += 1
    localStorage.setItem('carrito', JSON.stringify(this.carrito))
    this.CalcularTotales()

  }
  Disminuir(id:string, talla:string) {
    var posicion = this.carrito.findIndex((elemento) => (elemento.id == id && elemento.talla == talla))
    if(this.carrito[posicion].cantidad == 1){
      this.carrito.splice(posicion, 1)
    }
    else{
      this.carrito[posicion].cantidad -= 1

    }
    localStorage.setItem('carrito', JSON.stringify(this.carrito))
    this.CalcularTotales()
  }

  public total:number = 0;
  CalcularTotales(){
    this.total = 0;
    for(var i=0; i<this.carrito.length;i++){
      this.total += this.carrito[i].cantidad * this.carrito[i].precio

    }
  }
  QuitarItem(id:string, talla:string) {
    var posicion = this.carrito.findIndex((elemento) => (elemento.id == id && elemento.talla == talla))
    this.carrito.splice(posicion, 1)
    localStorage.setItem('carrito', JSON.stringify(this.carrito))

    this.CalcularTotales()
  }
}

