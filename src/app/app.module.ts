import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {AppprincComponent} from "./appbase/appprinc/appprinc.component";
import {AppClockComponent} from "./appbase/appclock/app.clock.component";
import {AppFooterComponent} from "./appbase/appfooter/app.footer.component";
import {AppLoadingComponent} from "./appbase/apploading/app.loading.component";
import {AppMenuComponent, AppSubMenuComponent} from "./appbase/appmenu/app.menu.component";
import {AppSidebarComponent} from "./appbase/appsidebar/app.sidebar.component";
import {AppTopBarComponent} from "./appbase/apptopbar/app.topbar.component";
import {RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {AppRoutes} from "./app.routes";
import {TrabajadoresComponent, TrabajadoresDialog} from "./formas/trabajadores/trabajadores.component";
import {AppLoadingService} from "./appbase/apploading/app.loading.service";
import {AppXsegundoService} from "./appbase/appclock/app.xsegundo.service";
import {DatePipe} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {PreventDoubleClickDirective} from "./directives/buttonDoubleClick";
import {OnlyNumerosDirective} from "./directives/onlyNumeros";
import {OnlyDatesDirective} from "./directives/onlyDates";
import {OnlyStringsDirective} from "./directives/onlyStrings";
import {MessagesModule} from "primeng/messages";
import {MessageModule} from "primeng/message";

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, HttpClientModule, ReactiveFormsModule,
    BrowserAnimationsModule, AppRoutes, MatDialogModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MessagesModule,
    MessageModule,
    MatMomentDateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })],
  entryComponents: [TrabajadoresDialog],
  declarations: [// Directivas
    PreventDoubleClickDirective, OnlyNumerosDirective, OnlyDatesDirective, OnlyStringsDirective,
    AppComponent, AppprincComponent, AppClockComponent, AppFooterComponent, AppLoadingComponent, AppMenuComponent, AppSidebarComponent, AppTopBarComponent, AppSubMenuComponent, TrabajadoresComponent, TrabajadoresDialog],
  providers: [AppXsegundoService, AppLoadingService, DatePipe, TranslateService, {provide: MAT_DATE_LOCALE, useValue: navigator.language}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
      http,
      `/assets/i18n/`,
      '.json'
  );
}
