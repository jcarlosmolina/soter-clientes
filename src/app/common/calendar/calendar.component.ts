import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import { LanguageMng } from '../languageMng';
import { Util } from '../app.utils';
import { FullCalendarComponent } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import { MenuItem } from 'primeng/api';
import { AbstractPIU } from '../abstractPIU';

/**
 * Componente para la visualización de instancias en un Calendario
 * Basado en el componente full-calendar (https://fullcalendar.io/)
 * Se muestra en el evento todos los atributos del display set a excepción de los que controlan el inicio y
 * final del periodo y los que se utilizan para dar color (fondo y texto).
 * La primera acción se lanza al pinchar sobre el evento y el resto de acciones y navegaciones se ofrecen en un menú
 * desplegable.
 * Atributos del componente:
 *  piu: AbstractPIU de los datos a mostrar
 *  data: Datos a mostrar
 *  attStart: Atributo con la fecha-hora de inicio del evento
 *  attEnd: Atributo con la fecha-hora de fin del evento
 *  atributoColorFondo: Opcinal. Atributo que indica el color de fondo para la instancia
 *  atributoColorTexto: Opcional. Atributo que indica el color para el texto de la instancia
 *  currentView: Vista actual del calendario
 *  currentDate: Dia actual del calendario
 * Eventos definidos:
 *  dataRequired: Se lanza cuando se modifican las fechas visualizadas y se necesitan los datos a mostrar
 *  dateClick: Se lanza cuando se pincha sobre el calendario (un día o una hora).
 *      Como argumento se manda la fecha o fecha-hora sobre la que se ha hecho click.
 */
@Component({
    selector: 'imes-calendar',
    templateUrl: './calendar.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.Default
})
export class CalendarComponent {

    // References the #calendar in the template
    @ViewChild('calendar', { static: false }) calendarComponent: FullCalendarComponent;

    /** References the #menuEvento in the template */
    @ViewChild('menuEvento', { static: false }) menuEvento: any;
    /** Elementos del menu contextual de cada evento */
    public itemsMenuEvento: MenuItem[];

    /** Abstract population interaction unit */
    protected intPIU: AbstractPIU;
    @Input()
    set piu(piu: AbstractPIU) {
        this.intPIU = piu;
        if (this.intPIU) {
            this.itemsMenuEvento = [];
            // Añadimos las acciones y navegaciones al menu contextual
            for (const acc of piu.actions) {
                // Solo acciones visibles y nombre-verbo
                if (acc.visible && acc.nounVerb) {
                    // Si es la primera encontrada la marcamos como link del texto, si no la añadimos al menú
                    if (this.linkTextoIsAction == null) {
                        this.linkTextoIsAction = true;
                        this.linkTextoIndex = acc.id;
                    } else {
                        this.itemsMenuEvento.push({
                            id: 'A' + acc.id,
                            label: acc.alias,
                            command: (event) => {
                                //event.originalEvent: Browser event
                                //event.item: menuitem metadata
                                this.lanzarAccionNavegacionDesdeMenu(true, acc.id);
                            }
                        });
                    }
                }
            }
            for (const nav of piu.navigations) {
                if (nav.visible) {
                    // Si es la primera navegación y no tenemos acción en el link del texto, la asignamos
                    if (this.linkTextoIsAction == null) {
                        this.linkTextoIsAction = false;
                        this.linkTextoIndex = nav.id;
                    } else {
                        // La añadimos al menu contextual
                        this.itemsMenuEvento.push({
                            id: 'N' + nav.id,
                            label: nav.alias,
                            command: (event) => {
                                //event.originalEvent: Browser event
                                //event.item: menuitem metadata
                                this.lanzarAccionNavegacionDesdeMenu(false, nav.id);
                            }
                        });
                    }
                }
            }

        }
    }
    get piu(): AbstractPIU { return this.intPIU; }

    /** Atributo con la fecha-hora de inicio del evento */
    @Input() public attStart: string;
    /** Atributo con la fecha-hora de fin del evento */
    @Input() public attEnd: string;
    /** Atributo que indica el color de fondo para la instancia */
    @Input() public atributoColorFondo = '';
    /** Atributo que indica el color para el texto de la instancia */
    @Input() public atributoColorTexto = '';

    /** Vista actual del calendario */
    @Input()
    set currentView(view: string) {
        if (view && this.intCurrentView !== view) {
            this.intCurrentView = view;
            if (this.calendarComponent && this.calendarComponent.getApi()) {
                this.calendarComponent.getApi().changeView(this.intCurrentView);
            } else {
                this.options.defaultView = this.intCurrentView;
            }
            this.currentViewChange.emit(this.intCurrentView);
        }
    }
    get currentView(): string {
        return this.intCurrentView;
    }
    @Output() currentViewChange = new EventEmitter<string>();

    /** Dia actual del calendario */
    @Input()
    set currentDate(date: Date) {
        if (date && this.intCurrentDate.toString() !== date.toString()) {
            this.intCurrentDate = date;
            if (this.calendarComponent && this.calendarComponent.getApi()) {
                this.calendarComponent.getApi().gotoDate(this.intCurrentDate);
            } else {
                this.options.defaultDate = this.intCurrentDate;
            }
            this.currentDateChange.emit(this.intCurrentDate);
        }
    }
    get currentDate(): Date {
        return this.intCurrentDate;
    }
    @Output() currentDateChange = new EventEmitter<Date>();


    /** Calendar data */
    @Input()
    set data(originalData: any) {
        this.intData = originalData;
        this.transformInEvents();

    }
    get data(): any { return this.intData; }


    /**
     * Se lanza cuando se modifican las fechas visualizadas y se necesitan los datos a mostrar
     */
    @Output() dataRequired = new EventEmitter<{ activeStart: Date, activeEnd: Date, currentStart: Date, currentEnd: Date }>();

    /**
     * Se lanza cuando se pincha sobre el calendario (un día o una hora).
     * Como argumento se manda la fecha o fecha-hora sobre la que se ha hecho click.
     */
    @Output() dateClick = new EventEmitter<Date>();

    /** Atributo interno para los atributos que se utilziarán en el título del evento */
    // private intAttTitle: string[] = [];
    /** Atributo interno para la vista actual */
    private intCurrentView = 'dayGridMonth';
    /** Atributo interno para la fecha actual */
    private intCurrentDate = new Date();
    /** Datos transformados */
    public events: any[] = [];
    /** Opciones del calendario */
    public options: any;
    /** Datos originales */
    protected intData: any;
    /** Fecha de inicio de la última búsqueda */
    private lastActiveStart: Date;
    /** Fecha de fin de la última búsqueda */
    private lastActiveEnd: Date;
    /** Link del texto: Acción o navegación */
    private linkTextoIsAction: boolean | null = null;
    /** Link del texto: Indice de la Acción o navegación */
    private linkTextoIndex: number | null = null;
    constructor(
        public readonly langMng: LanguageMng,
        public readonly util: Util,
        protected changeDetectorRef: ChangeDetectorRef) {

        // Creamos las opciones del calendario.
        // Se indican los aspectos de configuración, aspecto y manejadores de eventos
        this.options = {
            plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
            contentHeight: 600,
            headerToolbar: {
                left: 'prev,today,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            initialView: this.intCurrentView,
            initialDate: this.intCurrentDate,
            dateClick: (e) => {
                this.onDateClick(e);
            },
            eventClick: (e) => {
                this.onEventClick(e);
            },
            datesSet: (e) => {
                this.onDatesRender(e);
            },
            eventDidMount: (e) => {
                this.onEventDidMount(e);
            },
            // eventLimit: 4,
            weekNumbers: true,
            navLinks: true,
            editable: false,
            allDaySlot: false,
            slotDuration: '00:30:00',
            slotEventOverlap: false,
            // timeGridEventMinHeight: 20,
            locale: esLocale,
            eventTimeFormat: {
                hour: 'numeric',
                minute: '2-digit',
                meridiem: false
              },
            firstDay: 1
        };

        this.data = [];
    }

    /**
     * Transforma los datos recibidos de la server en eventos
     */
    private transformInEvents(): void {
        this.events = [];
        let ini: Date;
        let fin: Date;
        let allDayEvent = false;
        if (this.intData) {
            for (const instance of this.intData) {
                ini = undefined;
                fin = undefined;

                ini = instance[this.attStart];
                allDayEvent = true;
                if (this.attEnd) {
                    fin = instance[this.attEnd];
                    allDayEvent = false;
                    if (ini.getHours() === fin.getHours() &&
                        ini.getMinutes() === fin.getMinutes() &&
                        ini.getHours() === 0 &&
                        ini.getMinutes() === 0) {
                            allDayEvent = true;
                    }

                    if (ini.getHours() === 0 &&
                        ini.getMinutes() === 0 &&
                        fin.getHours() === 23 &&
                        fin.getMinutes() === 59 &&
                        fin.getSeconds() === 59) {
                            allDayEvent = true;
                            fin.setDate(fin.getDate() + 1);
                    }

                }

                // Añadimos toda la instancia en las propiedades extendidas
                this.events.push({
                    id: instance.oid,
                    title: this.getTexto(instance),
                    start: ini,
                    end: fin,
                    allDay: allDayEvent,
                    backgroundColor: this.getColorFondo(instance),
                    extendedProps: {
                        row: instance
                    }
                });
            }
        }
        this.options.events = this.events;
        this.changeDetectorRef.markForCheck();
    }

    private getTexto(row: any): string {
        let textValue = '';
        for (const att of this.piu.displaySet) {
            const attValue = row[att.field];
            if (attValue) {
                if (!att.visible ||
                    att.field.toLocaleLowerCase() === this.atributoColorFondo.toLocaleLowerCase() ||
                    att.field.toLocaleLowerCase() === this.atributoColorTexto.toLocaleLowerCase() ||
                    att.field.toLocaleLowerCase() === this.attStart.toLocaleLowerCase() ||
                    att.field.toLocaleLowerCase() === this.attEnd.toLocaleLowerCase()) {
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

    private getColorFondo(row: any): string {
        let color = '';
        if (this.atributoColorFondo && row[this.atributoColorFondo]) {
            color = '#' + row[this.atributoColorFondo];
        } else {
            color = '#007ad9';
        }
        return color;
    }

    /**
     * Manejador del evento que se lanza al pinchar sobre el calendario
     * @param e Datos del evento
     */
    public onDateClick(e: any): void {
        // Ocultamos el menu de los eventos
        this.menuEvento.hide();
        this.dateClick.emit(e.date);
    }

    /**
     * Manejador del evento que se lanza al pinchar sobre un evento
     * @param e Datos del evento
     */
    public onEventClick(e: any): void {
        // Ocultamos el menu de los eventos
        this.menuEvento.hide();
        if (this.linkTextoIsAction != null) {
            this.intPIU.onGridClickCell(e.event.extendedProps.row, this.linkTextoIsAction, this.linkTextoIndex);
        }
    }

    /**
     * Manejador del evento que se lanza al pintar un intervalo de fechas
     * @param e Datos del evento
     */
    public onDatesRender(e: any): void {
        // Lanzamos el evento para solicitar los datos de las fechas requeridas
        // Solo si las nuevas fechas no están comprendidas entre las de la última búsqueda
        if (!this.lastActiveStart || !this.lastActiveEnd ||
            e.view.activeStart < this.lastActiveStart || e.view.activeStart > this.lastActiveEnd ||
            e.view.activeEnd < this.lastActiveStart || e.view.activeEnd > this.lastActiveEnd) {
            this.dataRequired.emit(
                {
                    activeStart: e.view.activeStart,
                    activeEnd: e.view.activeEnd,
                    currentStart: e.view.currentStart,
                    currentEnd: e.view.currentEnd
                });
            this.lastActiveStart = e.view.activeStart;
            this.lastActiveEnd = e.view.activeEnd;
        }
        // Nos guardamos la vista y fecha actual
        this.currentView = e.view.type;
        this.currentDate = this.calendarComponent.getApi().getDate();
    }

    /**
     * Se dispara cada vez que se añade un evento al DOM. Sirve para ajustar elementos del mismo
     * @param info El evento a ser pintado
     */
    public onEventDidMount(info: any): void {
        // Añadimos el manejador del menú contextual
        if (info.el && info.event.extendedProps.row) {
            info.el.addEventListener('contextmenu', ((event: any) => {
                this.mostrarMenuEvento(event, info.event.extendedProps.row);
            }));
        }
    }

    /**
     * Muestra el menu contextual de un evento
     * @param event Datos del evento
     * @param row Fila con los datos del displayset
     */
    private mostrarMenuEvento(event: any, row: any) {
        // Cancelamos comportamiento por defecto
        event.preventDefault();
        // Asignamos la fila seleccionada a la PIU
        this.intPIU.gridSelectedRows = [row];

        // Activamos las opciones en función de la anticipación de precondiciones
        for (const menuItem of this.itemsMenuEvento) {
            menuItem.disabled = false;
            // Solo para acciones
            if (menuItem.id && menuItem.id.startsWith('A')) {
                const indice = Number.parseInt(menuItem.id.substring(1), 10);
                if (!this.piu.checkPreconditionInAdvanceForRows(indice, this.piu.gridSelectedRows)) {
                    menuItem.disabled = true;
                }
            }
        }

        // Abrimos el menú
        if (this.menuEvento.visible) {
            this.menuEvento.hide();
        } else {
            this.menuEvento.show(event);
        }
    }

    /**
     * Lanzamos la acción o navegación ofertada desde el menu contextual
     * @param esAccion  Indica si es acción o navegación
     * @param indice  Indice
     */
    private lanzarAccionNavegacionDesdeMenu(esAccion: boolean, indice: number): void {
        this.piu.onGridClickCell(this.piu.gridSelectedRows[0], esAccion, indice);
    }
}
