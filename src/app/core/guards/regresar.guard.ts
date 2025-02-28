import { CanDeactivateFn } from '@angular/router';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';

export const regresarGuard: CanDeactivateFn<FormularioComponent> = (
  component,
) => {
  console.log('Componente:', component);
  if (component.guardRegresar) {
    // Si se detecta cambios en el formulario
    return window.confirm(
      'Tienes cambios no guardados. ¿Estás seguro de que deseas salir?',
    );
  }
  // Si no se detecta cambios en el formulario
  return true;
};
