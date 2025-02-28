import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';

@Component({
  selector: 'app-agregar-productos',
  standalone: true,
  imports: [CommonModule, FormularioComponent],
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.less'],
})
export default class AgregarProductosComponent {
  constructor(private router: Router) {}
  public guardRegresar: boolean = false; // Propiedad para el guardia
  public irAProductos() {
    this.router.navigate(['productos']);
  }
  // Método para actualizar el estado del formulario
  public actualizarEstadoFormulario(estado: boolean) {
    this.guardRegresar = estado;
  }
}
