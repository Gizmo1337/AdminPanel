import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { StatusCardComponent } from '../dashboard/status-card/status-card.component';
@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    StatusCardComponent
    
  ],
  providers: [
    SmartTableService,
  ],
  exports: [
    ...routedComponents,
    StatusCardComponent
  ]
})
export class TablesModule { }
