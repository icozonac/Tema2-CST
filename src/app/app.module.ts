import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalComponent } from './modal/modal.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CardComponent,
    ModalComponent,
    SuccessModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzModalModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
