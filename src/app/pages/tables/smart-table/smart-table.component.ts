import {
  Component,
} from '@angular/core';
import {
  LocalDataSource,
} from 'ng2-smart-table';

import {
  SmartTableService,
} from '../../../@core/data/smart-table.service';
import {
  StatusCardComponent,
} from '../../dashboard/status-card/status-card.component';

// import {
//   UiFeaturesComponent
// } from '../../ui-features/ui-features.component';


@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [
      ` nb-card {
      transform: translate3d(0, 0, 0);
    }`,
  ],
})
export class SmartTableComponent {

  settings = {

    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      confirmSave: true,
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        width: '5%',
      },
      firstName: {
        title: 'Cod Studiu',
        type: 'string',
      },
      lastName: {
        title: 'Nume Studiu',
        type: 'string',
      },
      username: {
        title: 'Responsabil',
        type: 'string',
      },


    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onRowSelect(event): void {
    window.alert('Stuff works');


  }

  onEditConfirm(event): void {
    event.confirm.resolve();
    window.alert('Salvat cu succes :D !');
    // this.service.saveData(event.newData);

  }

  onCreateConfirm(event): void {
    event.confirm.resolve();
    window.alert('Creat cu succes !!! ');

  }



}

// '../../ui-features/tabs/tabs.component.scss'
