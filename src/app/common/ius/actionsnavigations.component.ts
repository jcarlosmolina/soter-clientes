import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractQueryIU, AccNavItem } from '../queryIUElements';

@Component({
    selector: 'imes-actionsnavigations',
    templateUrl: './actionsnavigations.component.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class ActionsNavigationsComponent {

    /** Abstract query component */
    //@Input() public queryIU: AbstractQueryIU;

    private intQueryIU: AbstractQueryIU = null;

    private numVisibleActions = 0;
    private numVisibleNavigations = 0;

    @Input()
    set queryIU(queryIU: AbstractQueryIU) {
        this.intQueryIU = queryIU;
        if (this.intQueryIU) {

            this.numVisibleActions = this.intQueryIU.actions.filter((act: AccNavItem) => {
                return act.visible && act.showInDefault;
            }).length;
            this.numVisibleNavigations = this.intQueryIU.navigations.filter((nav: AccNavItem) => {
                return nav.visible && nav.showInDefault;
            }).length;


        }
    }
    get queryIU(): AbstractQueryIU { return this.intQueryIU; }

    @Input() public showActions = true;
    @Input() public showNavigations = true;
    @Input() public numMaxButtons = 10;

    constructor() { }

    public anyVisible(): boolean {
        return this.numVisibleActions + this.numVisibleNavigations > 0;
    }

    public getActionsInButtons(): AccNavItem[] {
        const elements: AccNavItem[] = [];

        if (this.intQueryIU) {
            let numElements = 0;
            for (const act of this.intQueryIU.actions) {
                if (act.visible && act.showInDefault) {
                    if (numElements >= this.numMaxButtons) {
                        break;
                    }
                    elements.push(act);
                    numElements++;
                }
            }
        }
        return elements;
    }

    public getNavigationsInButtons(): AccNavItem[] {
        const elements: AccNavItem[] = [];

        if (this.intQueryIU) {
            let numElements = this.numVisibleActions;
            for (const nav of this.intQueryIU.navigations) {
                if (nav.visible && nav.showInDefault) {
                    if (numElements >= this.numMaxButtons) {
                        break;
                    }
                    elements.push(nav);
                    numElements++;
                }
            }
        }
        return elements;
    }

    
    public getActionsInMenu(): AccNavItem[] {
        const elements: AccNavItem[] = [];

        if (this.intQueryIU) {
            let numElements = 0;
            for (const act of this.intQueryIU.actions) {
                if (act.visible && act.showInDefault) {
                    if (numElements >= this.numMaxButtons) {
                        elements.push(act);
                    }
                    numElements++;
                }
            }
        }
        return elements;
    }

    public getNavigationsInMenu(): AccNavItem[] {
        const elements: AccNavItem[] = [];

        if (this.intQueryIU) {
            let numElements = this.numVisibleActions;
            for (const nav of this.intQueryIU.navigations) {
                if (nav.visible && nav.showInDefault) {
                    if (numElements >= this.numMaxButtons) {
                        elements.push(nav);
                    }
                    numElements++;
                }
            }
        }
        return elements;
    }
    
    public menuVisible(): boolean {
        return this.numVisibleActions + this.numVisibleNavigations > this.numMaxButtons;
    }

    
}
