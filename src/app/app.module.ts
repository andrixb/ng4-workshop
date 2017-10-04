import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';

import { AppComponent }  from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        CoreModule,
        SharedModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
