import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  constructor( public usuariosservicio: UsuarioService, private peticion:PeticionService, private mensaje:MensajeService) { }

  ngOnInit(): void {
  }

  email: string = '';
  password: string = '';

  iniciarsesion(){
    console.log(this.email);
    console.log(this.password);
  
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuario/login',
      data: {
        email:this.email,
        password:this.password,
      }

    }
  
    this.peticion.post(post.host + post.path, post.data).then(
    (respuesta:any) => {

      if(respuesta.data.length == 1) {
        this.mensaje.load('Bienvenido ' + respuesta.data[0].nombre)
        this.usuariosservicio.estadoiniciado = true
        localStorage.setItem('Estado_sesion', 'Ok')
        localStorage.setItem('nombre',respuesta.data[0].nombre)
        localStorage.setItem('email',respuesta.data[0].email)
        localStorage.setItem('rol_id',respuesta.data[0].rol_id)
      }
      else{
        this.mensaje.load('Error al iniciar la sesion')
        localStorage.setItem('Estado_sesion','Error')
      }

    })
    


  }

}
