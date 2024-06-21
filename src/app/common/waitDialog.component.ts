import { Component, Input } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';

@Component({
    selector: 'waitDialog',
    template: `
    <p-blockUI  [blocked]="showWait">
        <div class="waitLoading"></div>
    </p-blockUI>
  `
})
export class WaitDialogComponent {

    @Input() public showWait: boolean;

    constructor(private readonly appGlobalInfo: AppGlobalInfo) {
    }
}
