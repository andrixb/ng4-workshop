import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: 'search', component: SearchComponent },
            { path: '', redirectTo: '/', pathMatch: 'full' },
            { path: '**', redirectTo: '/', pathMatch: 'full' },
        ]),
    ],
    declarations: [
        AppComponent,
        NavigationComponent,
        SearchComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {}
