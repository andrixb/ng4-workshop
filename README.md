# Services

##What is that for?
Services are used to incapsulate the logic that can be reused across multiple components.

Services contains methods that does the work of getting and updating some data.

Data can be a local JSON file (in a folder), an external API, or our DB.

##When to use it?
Services need to be accessed by Components. We could import directly into the component but not t's ideal cause it may take to side effects.

Angular provides the registration of a service through the Injector so that the Service can be treated as Singleton: that helps to avoid to compromise the data of the application state.

##How to declare it?
First step is to create a new file following this name convention: myservice.service.ts

Inside that file we than need to import Injectable: `import { Injectable } from '@angular/core';`

Above the class that is gong to use the sevice we use the `@Injectable` decorator:
```ts
@Injectable()

export class MyService {

  getTheServiceData(): MyData[] {
    return [{'data': 2}, {'data2': 4}];
  }
}
```
Since a decorator adds metadata to a class, or better it extends class functionalities, the Injectable decorator help us to use inject the service as a singleton. Than inside the class we will some methods that will do the work to consume the service.

Inside app.module.ts we need to add the service into the providers:
```ts
@NgModule({

...

providers: [ MyService ]
})
```
##How to use it?
Inside the Component we need to import the service.

We need to add the service inside the class constructor:
```ts
import { MyService } from './myservice.service.ts';

export class MyClass {

data: MyData[];

constructor(private _myService: MyService) {
  this.data = _myService.getTheServiceData();
}

// getSomethingUsingTheService() {

//    this._myService.getTheServiceData();

// }
}
```
