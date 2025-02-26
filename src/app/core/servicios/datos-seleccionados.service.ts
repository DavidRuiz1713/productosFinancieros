/**
 * Servicio que permite intercambiar datos de la seleccion de un determindado
 * producto entre varios componentes que no tengan relacion
 */
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatosSeleccionadosService {
  // Coloco un señal en vez de una variable normal
  private producto = signal<any>(null);

  // Método para actualizar el producto
  setProducto(producto: any): void {
    this.producto.set(producto);
  }

  // Método para obtener el valor actual del producto
  getProducto(): any {
    return this.producto();
  }

  // Método para obtener la señal completa
  getProductoSignal() {
    return this.producto;
  }

  // Método para limpiar el producto
  clearProducto(): void {
    this.producto.set(null);
  }
}
