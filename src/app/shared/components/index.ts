import { CardHeaderComponent } from './card-header/card-header.component';
import { DummyTextComponent } from './dummy-text/dummy-text.component';
import { SnackComponent } from './snack/snack.component';
export const sharedComponents: any[] = [
  SnackComponent,
  CardHeaderComponent,
  DummyTextComponent
]
export * from './snack/snack.component';
export * from './card-header/card-header.component';
export * from './dummy-text/dummy-text.component';
