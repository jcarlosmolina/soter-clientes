import { Injectable } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from './app.cachedependencyrules';
import { ExchangeInfo } from './app.exchangeinfo';
import { ModelConstants } from './model.constants';
import { Util } from './app.utils';
import { UserFunctions } from './userFunctions';
import { StandardFunctions } from './standardFunctions';
import { LanguageMng } from './languageMng';

/**
 * Conditional navigation manager
 * Handles all conditional navigation defined in the model
 */
@Injectable({providedIn: 'root'})
export class ConditionalNavigationMng {

    /** Cache for queries */
    private queriesCache: CacheDependencyRules;

    constructor(private readonly appGlobalInfo: AppGlobalInfo, private readonly util: Util, private langMng: LanguageMng, private readonly stdFun: StandardFunctions,
                private readonly usrFunc: UserFunctions) {
     }

    /**
     * Process the conditional navigation
     * @param className Class name
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    public processConditionalNavigation(className: string, serviceName: string, request: any, response: any, previousContext: any,
                                        comeBackContext: any): boolean {

        this.queriesCache = new CacheDependencyRules(this.appGlobalInfo, this.util);
        this.appGlobalInfo.appExchangeInfo.clearConditionalNavigation();

        return false;
    }
}
