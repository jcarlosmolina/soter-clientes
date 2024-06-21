import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AppGlobalInfo } from './app.appglobalinfo';
import { Util } from './common/app.utils';
import { OidBuilder } from './common/oidBuilder';
import { LanguageMng } from './common/languageMng';
import { ConditionalNavigationMng } from './common/conditionalNavigationMng';
import { LoginGuard } from './common/loginGuard';
import { PopStateNavigationGuard } from './common/popStateNavigationGuard';
import { StandardFunctions } from './common/standardFunctions';
import { AppHeaderComponent } from './appheader/appheader.component';
import { AppMainPage } from './app.mainpage';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { CommonComponentsModule } from './commoncomponents.module';
import { NoAccessComponent } from './common/noAccess.component';
import { WrongVersionComponent } from './common/wrongVersion.component';
import { ConditionalNavigationComponent } from './common/conditionalNavigation.component';
import { ClassServiceLogComponent } from './common/classServiceLog.component';
import { ModalForIUModule } from './common/modalforiu/modalforiu.module';
import { UserFunctions } from './common/userFunctions';

@NgModule({
    imports: [CommonModule, FormsModule, BrowserModule, BrowserAnimationsModule, HttpClientModule,
      ToastModule, CommonComponentsModule, ModalForIUModule, AppRoutingModule],
    exports: [RouterModule],
    declarations: [AppComponent, AppHeaderComponent, AppMainPage, LoginComponent, NoAccessComponent,
      WrongVersionComponent, ConditionalNavigationComponent, ClassServiceLogComponent],
    providers: [LanguageMng, { provide: LOCALE_ID,
      deps: [LanguageMng],
      useFactory: (languageMng: LanguageMng) => languageMng.getLanguageId()},
      Title, AppGlobalInfo, Util, UserFunctions, OidBuilder, ConditionalNavigationMng, DatePipe,
      LoginGuard, PopStateNavigationGuard, StandardFunctions, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

