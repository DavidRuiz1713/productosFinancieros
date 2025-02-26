import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-notificacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificacionComponent implements OnChanges {
  @Input() texto: string = '';
  @Input() tipo: string = '';
  public mostrarNotificacion: boolean = false;
  public ocultarNotificacion: boolean = false;
  private detectarCambios = inject(ChangeDetectorRef);

  ngOnChanges(changes: SimpleChanges) {
    // Si cambia el valor de 'texto' y no está vacío
    if (changes['texto'] && changes['texto'].currentValue) {
      this.mostrarYOcultarNotificacion();
    }
  }

  mostrarYOcultarNotificacion() {
    this.mostrarNotificacion = true;
    this.ocultarNotificacion = false;

    if (this.tipo != 'error') {
      setTimeout(() => {
        this.ocultarNotificacion = true;
        this.detectarCambios.markForCheck();
      }, 3000);

      setTimeout(() => {
        this.mostrarNotificacion = false;
        this.detectarCambios.markForCheck();
      }, 4000);
    }
  }
}
