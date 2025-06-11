import type { Meta, StoryObj } from '@storybook/angular';
import { BaseCardComponent } from '../../../app/components/cards/base-card/basecard.component';

const meta: Meta<BaseCardComponent> = {
  title: 'Components/Cards/BaseCard',
  component: BaseCardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    showCheckbox: { control: 'boolean' },
    checkboxLabel: { control: 'text' },
    dropdownPlaceholder1: { control: 'text' },
    dropdownPlaceholder2: { control: 'text' },
    dropdownPlaceholder3: { control: 'text' },
    dropdownOptions: { control: 'object' },
    headerTitle: { control: 'text' },
    headerSubtitle: { control: 'text' },
    headerContent: { control: 'text' },
  },
  args: {
    showCheckbox: true,
    checkboxLabel: 'Sí, puede ser no codificado',
    dropdownPlaceholder1: 'Selecciona Ejemplo 1',
    dropdownPlaceholder2: 'Selecciona Ejemplo 2',
    dropdownPlaceholder3: 'Selecciona Ejemplo 3',
    dropdownOptions: ['Opción 1', 'Opción 2', 'Opción 3'],
    headerTitle: 'Ver planes disponibles',
    headerSubtitle: 'Visualiza los planes comerciales disponibles',
    headerContent:
      'Estos son los planes comerciales disponibles en este momento, puedes agregar nuevos o editar los existentes presionando sobre los 3 puntos verticales.',
  },
};

export default meta;
type Story = StoryObj<BaseCardComponent>;

export const Default: Story = {};
