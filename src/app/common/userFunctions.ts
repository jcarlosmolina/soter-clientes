import { Injectable } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { UsuarioServices } from '../usuario/usuario.services';
import { ErrorInformation, QueryResponse } from './answerRequestInformation';
import { Util } from './app.utils';
import { Instance } from './baseIUElements';
import { JsonUtility } from './jsonUtility';

@Injectable({providedIn: 'root'})
export class UserFunctions {

    constructor(private util: Util, private appGlobalInfo: AppGlobalInfo) { }

    /**
     * valida si la cuenta bancaria es correcta
     * @param pIBAN string de 24 caracteres
     */
    public validarCuentaBancaria(pIBAN: string): Promise<boolean> {
        const params = {pIBAN: pIBAN};
        return new Promise((resolve, reject) => {
            // Call to the back end implementation
            this.util.callUserFunctionInBackEnd('validarCuentaBancaria', params).then((result: any) => {
                resolve(result);
            }).catch ((error: any) => {
                reject(error);
            });
        });
    }

    /**
     * calcular el IBAN dados los datos de la cuenta bancaria
     * @param pfuPais No comments
     * @param pfuSucursal No comments
     * @param pfuDC No comments
     * @param pfuCuenta No comments
     * @param pfuCodBanco No comments
     */
    public calcularIBAN(pfuPais: any, pfuSucursal: string, pfuDC: string, pfuCuenta: string, pfuCodBanco: string): Promise<string> {
        const params = {pfuPais: pfuPais, pfuSucursal: pfuSucursal, pfuDC: pfuDC, pfuCuenta: pfuCuenta, pfuCodBanco: pfuCodBanco};
        return new Promise((resolve, reject) => {
            // Call to the back end implementation
            this.util.callUserFunctionInBackEnd('calcularIBAN', params).then((result: any) => {
                resolve(result);
            }).catch ((error: any) => {
                reject(error);
            });
        });
    }

    /**
     * No comments
     * @param pCodigoPostal No comments
     */
    public getCodigoPostal(pCodigoPostal: string): Promise<any> {
        const params = {pCodigoPostal: pCodigoPostal, displaySetItems: ''};
        return new Promise((resolve, reject) => {
            // Call to the back end implementation
            this.util.callUserFunctionInBackEnd('getCodigoPostal', params).then((result: any) => {
                if (result && result.jsonOID) {
                    resolve(JSON.parse(result.jsonOID));
                } else {
                    resolve(undefined);
                }
            }).catch ((error: any) => {
                reject(error);
            });
        });
    }

    /**
     * No comments
     * @param pMunicipio No comments
     */
    public getMunicipio(pMunicipio: number): Promise<any> {
        const params = {pMunicipio: pMunicipio, displaySetItems: ''};
        return new Promise((resolve, reject) => {
            // Call to the back end implementation
            this.util.callUserFunctionInBackEnd('getMunicipio', params).then((result: any) => {
                if (result && result.jsonOID) {
                    resolve(JSON.parse(result.jsonOID));
                } else {
                    resolve(undefined);
                }
            }).catch ((error: any) => {
                reject(error);
            });
        });
    }

}
