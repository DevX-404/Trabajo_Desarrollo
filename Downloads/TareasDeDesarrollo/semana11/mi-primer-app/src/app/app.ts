import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilDesarrollador } from './perfil-desarrollador/perfil-desarrollador';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PerfilDesarrollador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-primer-app');
}
