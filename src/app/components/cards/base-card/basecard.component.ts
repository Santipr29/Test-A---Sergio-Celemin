import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMomentosComponent } from '../../header/header-momentos/header-momentos.component';
import { DropdownMenuComponent } from '../../dropdown-menu/dropdown-menu.component';
import { CheckboxTextComponent } from '../../Checkbox/CheckboxText/CheckboxText.component';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'storybook-base-card',
  standalone: true,
  imports: [
    CommonModule,
    HeaderMomentosComponent,
    DropdownMenuComponent,
    CheckboxTextComponent,
    ButtonComponent,
  ],
  templateUrl: './basecard.component.html',
  styleUrls: ['./basecard.component.scss'],
})
export class BaseCardComponent {
  @Input() showCheckbox = true;
  @Input() checkboxLabel = 'Sí, puede ser no codificado';

  @Input() dropdownPlaceholder1 = 'Placeholder';
  @Input() dropdownPlaceholder2 = 'Placeholder';
  @Input() dropdownPlaceholder3 = 'Placeholder';
  @Input() dropdownOptions: string[] = [];

  @Input() headerTitle = 'Ver planes disponibles';
  @Input() headerSubtitle = 'Visualiza los planes comerciales disponibles';
  @Input() headerContent =
    'Estos son los planes comerciales disponibles en este momento, puedes agregar nuevos o editar los existentes presionando sobre los 3 puntos verticales.';
}
