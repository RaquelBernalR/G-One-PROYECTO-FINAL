import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public usuariosservice:UsuarioService) { }

  ngOnInit(): void {
    let Estado_sesion = localStorage.getItem('Estado_sesion')
    console.log(Estado_sesion)
    if(Estado_sesion != null){
      if(Estado_sesion == 'Ok'){
        this.usuariosservice.estadoiniciado = true
      }
      else{
        this.usuariosservice.estadoiniciado = false
      }
    }
    else{
      this.usuariosservice.estadoiniciado = false
    }
  }

  Cerrarsesion(){
    this.usuariosservice.estadoiniciado = false
    localStorage.setItem('Estado_sesion','Error')
  }

}
