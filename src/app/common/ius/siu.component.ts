import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LanguageMng } from '../languageMng';
import { AbstractServiceIU } from '../abstractSIU';
import { FieldOVLense, FieldOVLenseSearch, Field } from '../baseIUElements';

@Component({
    selector: 'imes-siu',
    templateUrl: './siu.component.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class SIUComponent {

    /** Abstract service interaction unit */
    @Input() public siu: AbstractServiceIU;

    constructor(
        public readonly langMng: LanguageMng) {
    }

    public onLenseSelected(field: Field): void {
        //  (selected)="onputhisDelegacionChange()"
        // (cleared)="cleanputhisDelegacion()" (searched)="doSearchAction('delegacionedituinstanceputhisDelegacion')"></imes-lense>
        const methodName = 'on' + field.nameInRequest.replace('_', 'u') + 'Change';
        this.siu[methodName].apply(this.siu, []);
    }
    public onLenseClean(field: Field): void {
        const methodName = 'clean' + field.nameInRequest.replace('_', 'u');
        this.siu[methodName].apply(this.siu, []);
    }
    public doSearchAction(field: Field): void {
        const methodName = 'doSearchAction';
        const arg = this.siu.className.replace('_', 'u').toLowerCase() + this.siu.serviceName.replace('_', 'u').toLowerCase() +
            field.nameInRequest.replace('_', 'u');
        this.siu[methodName].apply(this.siu, [arg]);
    }

    public onLenseSearchSelected(field: FieldOVLenseSearch, event: any): void {
        const methodName = 'process' + field.nameInRequest.replace('_', 'u') + 'Selected';
        this.siu[methodName].apply(this.siu, [event]);
    }

    public onKeypressLenseSearch(field: FieldOVLenseSearch): void {
        const methodName = 'onKeypressLenseSearch';
        const arg = 'on' + field.nameInRequest.replace('_', 'u') + 'Change';
        this.siu[methodName].apply(this.siu, [arg]);
    }


    // <imes-lensesearch [field]="field" *ngIf="field.visible && field.constructor.name == 'FieldOVLenseSearch'"
    // (selected)="processputhisUsuarioSelected($event)" (cleared)="cleanputhisUsuario()"
    // (keypressLenseSearch)="onKeypressLenseSearch('onputhisUsuarioChange')"
    // (searched)="doSearchAction('usuarioedituinstanceputhisUsuario')"></imes-lensesearch>

}
