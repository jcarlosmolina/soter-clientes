import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LanguageMng } from '../languageMng';
import { AbstractIIU } from '../abstractIIU';

@Component({
    selector: 'imes-iiu',
    templateUrl: './iiu.component.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class IIUComponent {

    /** Abstract instance interaction unit */
    @Input() public iiu: AbstractIIU;

    constructor(
        public readonly langMng: LanguageMng) {
    }
}
