import { NotificationComponent } from './../shared/notification/notification.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Injectable({
  providedIn: 'root'
})

export class UIService {

  constructor(
    private dialog: MatDialog,
  ) { }

  message(val: string = 'An unknown error occurred.') {

    const dialog = this.dialog.open(NotificationComponent,
      {
        width: 'fit-content',
        minWidth: '250px',
        height: 'fit-content',
        hasBackdrop: false,
        position: { top: '10px', right: '10px' },
        data: val,
      });

    setTimeout(() => {
      dialog.close();
    }, 3000);
  }

}
