import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Feed } from './search.model';

@Injectable()
export class SearchService {
    private API_KEY: string = '0b083d8f-3df0-4714-9759-372d7602b385';
    private API_CALL: string = `https://content.guardianapis.com/search?api-key=${this.API_KEY}`;

    constructor(private _http: Http) {}

    getData(): Observable<Feed> {
        return this._http.get(this.API_CALL)
            .map(this.extractFeeds)
            .catch(this.handleError);
    }

    private extractFeeds(res: Response): Feed {
        let feed: any = res.json();
        return feed || {};
    }

    private handleError (error: any) {
        let errMsg: any = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
