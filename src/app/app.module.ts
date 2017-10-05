import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import { NewsCardComponent } from './news-cards/news-cards.component';

const appRoutes: Routes = [
    { path: 'search', component: SearchComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(
            appRoutes,
        ),
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
