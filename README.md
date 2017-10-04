# NgModule
"NgModules are used in order to help us organise our application into choesive block of functionality."

Every Ng has at least one module _the root module_ names `AppModule` (N.B. A root module doesn't need to export anything).
Large applications have usually more _feature modules_.

A module is a class with a `@NgModule` decorator.

Further readings: https://angular.io/guide/ngmodule

## How to declare and use it?
To be able to define modules we have to use the decorator `NgModule` from `@angular/core`.
`app.module.ts`
```ts
import { NgModule } from '@angular/core';

@NgModule({
  imports: [ ... ],
  declarations: [ ... ],
  bootstrap: [ ... ]
})

export class AppModule { }
```

We lunch the app by bootstrapping the root module: 

`main.ts`
```ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```