import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public estadoiniciado: boolean = false;
  public rolactual:string = '1';

  
}
