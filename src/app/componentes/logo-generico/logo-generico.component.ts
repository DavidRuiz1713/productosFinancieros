import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-logo-generico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-generico.component.html',
  styleUrls: ['./logo-generico.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoGenericoComponent {
  @Input() texto: string = '';
}
