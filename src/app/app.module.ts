import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { NewsCardComponent } from './news-cards/news-cards.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
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
        NewsCardComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule {}
