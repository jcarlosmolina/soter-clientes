import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import { LanguageMng } from '../languageMng';
import { Util } from '../app.utils';
import { AbstractPIU } from '../abstractPIU';

/**
 * Componente para la visualización de instancias en forma de rectángulos
 * Se muestran  todos los atributos del display set a excepción de los que se utilizan para dar color (fondo y texto).
 * La primera acción se lanza al pinchar sobre el evento y el resto de acciones y navegaciones se ofrecen en un menú
 * desplegable.
 * Atributos del componente:
 *  piu: AbstractPIU de los datos a mostrar
 *  atributoColorFondo: Opcinal. Atributo que indica el color de fondo para la instancia
 *  atributoColorTexto: Opcional. Atributo que indica el color para el texto de la instancia
 *  numCols: Numero de columnas en las que se dispondrán los datos (rectángulos)
 */
@Component({
    selector: 'imes-bloquedisplayset',
    templateUrl: './bloquedisplayset.component.html',
    styles: [
        '.imesbloque{border: 1px solid black;border-radius:5px;width:48%;margin:3px 1% 3px 1%;padding:0px 5px;height:23px;float:left;}',
        '.imesbloque label{float:left;height:auto;text-decoration:underline;cursor:pointer;max-width:calc(100% - 30px);}',
        '.imesbloque .btnDesplegable{width: 21px;height: 18px;padding: 0px;border: 0px;background-color: #f1f3f4;border-radius: 9px;margin-top: 2px;}',
        '.imesbloque .menuPopup{display: block; float:right; width: 21px;height: 21px;}',
        '.imesbloque .menuPopup .dropdown-menu{padding: 3px 8px;}'],
        changeDetection: ChangeDetectionStrategy.Default
})
export class BloqueDisplaysetComponent {

    /** Define el ancho de una instancia. Se calcula en porcentaje basado en el número de columnas */
    public anchoInstancia = '48%';
    private intNumCols = 2;

    /** Abstract population interaction unit */
    protected intPIU: AbstractPIU;
    @Input()
    set piu(piu: AbstractPIU) {
        this.intPIU = piu;
        if (this.intPIU) {

        }
    }
    get piu(): AbstractPIU { return this.intPIU; }

    /** Atributo que indica el color de fondo para la instancia */
    @Input() public atributoColorFondo = '';
    /** Atributo que indica el color para el texto de la instancia */
    @Input() public atributoColorTexto = '';
    /** Número de columnas en las que se dispondran las instancias */
    @Input()
    set numCols(cols: number) {
        this.intNumCols = cols;
        if (this.intNumCols > 0) {
            this.anchoInstancia = ((100 / cols) - 2) + '%';
        } else {
            this.anchoInstancia = '48%';
        }
    }
    get numCols(): number { return this.intNumCols; }

    constructor(
        public readonly langMng: LanguageMng,
        public readonly util: Util,
        protected changeDetectorRef: ChangeDetectorRef) {
    }

    /**
     * Devuelve el color de fondo para la instancia recibida
     * @param row Valores de vueltos por la server para la instancia
     */
    public getColorFondo(row: any): string {
        let color = '';
        if (this.atributoColorFondo && row[this.atributoColorFondo]) {
            color = '#' + row[this.atributoColorFondo];
        } else {
            color = '#007ad9';
        }
        return color;
    }

    /**
     * Devuelve el color para el texto de la instancia recibida
     * @param row Valores de vueltos por la server para la instancia
     */
    public getColorTexto(row: any): string {
        let color = '';
        if (this.atributoColorTexto && row[this.atributoColorTexto]) {
            color = '#' + row[this.atributoColorTexto];
        } else {
            color = '#ffffff';
        }
        return color;
    }

    /**
     * Devuelve el texto a utilizar en la instancia
     * @param row Valores de vueltos por la server para la instancia
     */
    public getTexto(row: any): string {
        let textValue = '';
        for (const att of this.piu.displaySet) {
            const attValue = row[att.field];
            if (attValue) {
                if (!att.visible ||
                    att.field.toLocaleLowerCase() === this.atributoColorFondo.toLocaleLowerCase() ||
                    att.field.toLocaleLowerCase() === this.atributoColorTexto.toLocaleLowerCase()) {
                    continue;
                }

                if (textValue.length > 0) {
                    textValue += ' ';
                }
                if (att.options) {
                    textValue += this.piu.getValueFromDefinedSelection(att, attValue);
                } else {
                    textValue += this.util.applyDefaultFormat(attValue, att.type);
                }
            }
        }
        return textValue;
    }

}
