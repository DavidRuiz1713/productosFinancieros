import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ProductosComponent from './paginas/productos/productos.component';
import AgregarProductosComponent from './paginas/agregar-productos/agregar-productos.component';
import { NotificacionComponent } from './componentes/notificacion/notificacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProductosComponent,
    AgregarProductosComponent,
    NotificacionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'administracion-financiera';
}
