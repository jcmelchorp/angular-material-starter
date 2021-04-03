import { CardHeaderComponent } from './card-header/card-header.component';
import { DummyTextComponent } from './dummy-text/dummy-text.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SnackComponent } from './snack/snack.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
export const sharedComponents: any[] = [
  SnackComponent,
  CardHeaderComponent,
  DummyTextComponent,
  UnderConstructionComponent,
  NotFoundComponent
]
export * from './snack/snack.component';
export * from './card-header/card-header.component';
export * from './dummy-text/dummy-text.component';
export * from './under-construction/under-construction.component';
export * from './not-found/not-found.component';
