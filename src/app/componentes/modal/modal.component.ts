import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  ChangeDetectorRef, // Importamos ChangeDetectorRef
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from '../../core/servicios/productos.service';
import { NotificacionComponent } from '../notificacion/notificacion.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NotificacionComponent],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  // Inyectamos el servicio
  private productosService = inject(ProductosService);
  private detectarCambios = inject(ChangeDetectorRef);

  modalVisible: boolean = false;

  // Datos obtenidos de cada producto
  @Input() id: string = '';
  public errorMessage: string = '';
  public modalErrorVisible: boolean = false;

  ngOnInit() {
    // Suscripción para los errores del servicio
    this.productosService.error$.subscribe((error) => {
      if (error) {
        this.errorMessage = error;
        this.detectarCambios.markForCheck();
      }
    });
  }

  mostrarModal() {
    this.modalVisible = true;
    this.detectarCambios.markForCheck();
  }

  ocultarModal() {
    this.modalVisible = false;
    this.productosService.limpiarMensaje();
    this.detectarCambios.markForCheck();
  }

  eliminarProducto() {
    this.productosService.eliminarProducto(this.id).subscribe({
      next: (response) => {
        this.modalVisible = false;
        this.detectarCambios.markForCheck();
      },
      error: (error) => {
        this.ocultarModal();
      },
    });
  }
}
