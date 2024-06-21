import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BlockUIModule } from 'primeng/blockui';
import { DialogModule } from 'primeng/dialog';
import { StepsModule } from 'primeng/steps';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { BreadCrumbMngComponent } from './common/breadCrumbMng.component';
import { WaitDialogComponent } from './common/waitDialog.component';
import { ProgressBarComponent } from './common/progressBar.component';
import { GridPreferencesComponent } from './common/gridPreferences.component';
import { ErrorMessagesComponent } from './common/errorMessages.component';
import { GridComponent } from './common/ius/grid.component';
import { PIUComponent } from './common/ius/piu.component';
import { DetailsInRowGridComponent } from './common/ius/detailsinrowgrid.component';
import { IIUComponent } from './common/ius/iiu.component';
import { MDIUComponent } from './common/ius/mdiu.component';
import { SIUComponent } from './common/ius/siu.component';
import { ActionsNavigationsComponent } from './common/ius/actionsnavigations.component';
import { PIUButtonsComponent } from './common/ius/piubuttons.component';
import { LenseComponent, LenseSearchComponent, PreloadComponent, PreloadMultipleComponent, PreloadMultipleDropdownComponent } from './common/fields/input.ov.fields';
import { InputStringComponent, InputNumericComponent, InputDateComponent, InputCheckComponent } from './common/fields/input.dv.fields';
import { InputDefinedSelectionComponent, InputRadioComponent, InputBlobComponent,
    InputBlobImageComponent, ImesPDFViewerComponent} from './common/fields/input.dv.fields';
import { TICAGridComponent } from './common/tica/ticagrid.component';
import { GenericSiuComponent } from './common/genericSiu.component';
import { ChangePasswordComponent } from './common/changePassword.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MenuModule } from 'primeng/menu';
import { CalendarComponent } from './common/calendar/calendar.component';
import { CalendarMonthComponent } from './common/calendar/calendarmonth.component';
import { BloqueDisplaysetComponent } from './common/calendar/bloquedisplayset.component';
import { EditorModule } from 'primeng/editor';
import { ChartModule } from 'primeng/chart';

@NgModule({
    imports: [CommonModule, FormsModule, TableModule, DropdownModule,
        CalendarModule, MultiSelectModule, ListboxModule, RadioButtonModule, BlockUIModule, DialogModule, StepsModule,
        TriStateCheckboxModule, NgxExtendedPdfViewerModule, FullCalendarModule, MenuModule, EditorModule, ChartModule],
    declarations: [BreadCrumbMngComponent, WaitDialogComponent, ProgressBarComponent, ChangePasswordComponent,
        GridPreferencesComponent, ActionsNavigationsComponent, GridComponent, DetailsInRowGridComponent,
        PIUButtonsComponent, PIUComponent, IIUComponent, MDIUComponent, SIUComponent, GenericSiuComponent,
        TICAGridComponent, InputStringComponent, InputNumericComponent, InputDateComponent,
        InputDefinedSelectionComponent, InputRadioComponent, InputCheckComponent, InputBlobComponent,
        InputBlobImageComponent, ImesPDFViewerComponent, LenseComponent, LenseSearchComponent, PreloadComponent,
        PreloadMultipleComponent, PreloadMultipleDropdownComponent, ErrorMessagesComponent,
        CalendarComponent, CalendarMonthComponent, BloqueDisplaysetComponent
    ],
    exports: [BreadCrumbMngComponent, WaitDialogComponent, ProgressBarComponent, ChangePasswordComponent,
        GridPreferencesComponent, ActionsNavigationsComponent, GridComponent, DetailsInRowGridComponent,
        PIUButtonsComponent, PIUComponent, IIUComponent, MDIUComponent, SIUComponent, GenericSiuComponent,
        TICAGridComponent, InputStringComponent, InputNumericComponent, InputDateComponent,
        InputDefinedSelectionComponent, InputRadioComponent, InputCheckComponent, InputBlobComponent,
        InputBlobImageComponent, ImesPDFViewerComponent, LenseComponent, LenseSearchComponent, PreloadComponent,
        PreloadMultipleComponent, PreloadMultipleDropdownComponent, ErrorMessagesComponent,
        FormsModule, TableModule, DropdownModule, CalendarModule, MultiSelectModule, ListboxModule,
        RadioButtonModule, BlockUIModule, DialogModule, StepsModule, TriStateCheckboxModule,
        CalendarComponent, CalendarMonthComponent, BloqueDisplaysetComponent, FullCalendarModule, MenuModule, EditorModule, ChartModule]
})
export class CommonComponentsModule { }
