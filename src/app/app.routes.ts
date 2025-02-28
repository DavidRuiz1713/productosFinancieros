import { Routes } from '@angular/router';
import { regresarGuard } from './core/guards/regresar.guard';

/**
 * Configuracion de rutas para la aplicacion
 */

export const routes: Routes = [
  {
    path: 'productos',
    loadComponent: () => import('./paginas/productos/productos.component'),
  },
  {
    path: 'agregarProductos',
    loadComponent: () =>
      import('./paginas/agregar-productos/agregar-productos.component'),
    canDeactivate: [regresarGuard],
  },
  {
    path: 'editarProducto',
    loadComponent: () =>
      import('./paginas/agregar-productos/agregar-productos.component'),
    canDeactivate: [regresarGuard],
  },
  {
    path: '**',
    loadComponent: () => import('./paginas/productos/productos.component'),
  },
];
