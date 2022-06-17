import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { FocusOrigin } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, NgZone } from '@angular/core';

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'ecommerce-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogAnimations, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'dialog-animations',
  templateUrl: '../../../core/debug/debug.component.html',
  // templateUrl: './debug.component.html',
  // template: `
  //   <style>
  //     h1 {
  //       color: red;
  //     }
  //   </style>

  //   <h1>Debug</h1>

  //   <app-focus-monitor-directives></app-focus-monitor-directives>
  // `,
})
export class DialogAnimations {
  elementOrigin = this.formatOrigin(null);
  subtreeOrigin = this.formatOrigin(null);

  constructor(
    public dialogRef: MatDialogRef<DialogAnimations>,
    private _ngZone: NgZone,
    private _cdr: ChangeDetectorRef
  ) {}

  getValue(event: Event): string {
    console.log('event: ', event);
    return (event.target as HTMLInputElement).value;
  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }

  // Workaround for the fact that (cdkFocusChange) emits outside NgZone.
  markForCheck() {
    this._ngZone.run(() => this._cdr.markForCheck());
  }
}
