import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-desarrollador',
  imports: [],
  templateUrl: './perfil-desarrollador.html',
  styleUrl: './perfil-desarrollador.css',
})
export class PerfilDesarrollador {
  nombre: string = 'Developer';
  rol: string = 'Fullstack Angular Specialist';
  descripcion: string = 'Apasionado por crear interfaces modernas y escalables.';
  skills: string[] = ['Angular', 'TypeScript', 'CSS3', 'Node.js'];
}
