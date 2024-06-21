import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LanguageMng } from '../languageMng';
import { AbstractMDIU } from '../abstractMDIU';

@Component({
    selector: 'imes-mdiu',
    templateUrl: './mdiu.component.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class MDIUComponent {

    /** Abstract Master-Detail interaction unit */
    @Input() public mdiu: AbstractMDIU;

    constructor(
        public readonly langMng: LanguageMng) {
    }
}
