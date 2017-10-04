import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'shows',
        loadChildren: 'app/+shows/shows.module#ShowsModule',
    },
    {
        path: 'show',
        loadChildren: 'app/+show-detail/show-detail.module#ShowDetailModule',
    },
    {
        path: '',
        redirectTo: '/shows',
        pathMatch: 'full',
    },
];
