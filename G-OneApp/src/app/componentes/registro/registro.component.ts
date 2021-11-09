import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

   nombre: string = '';
   apellidos: string = '';
   email: string = '';
   password: string = '';
   celular: number = 0;
   ciudad: string = '';

  constructor() {}
   
  registro() {

    console.log(this.email);
    console.log(this.password);
  }
  ngOnInit(): void {

    Guardar(){
      var post = {
        host:this.peticion.urllocal,
        path:'/guardar',
        data:{
          nombre:this.nombre,
          apellidos:this.apellidos,
          email:this.email,
          password:this.password,
          celular:this.celular,
          ciudad:this.ciudad
        }
      }
    }

  }
}