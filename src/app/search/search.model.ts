export interface Feed {
   'response': {
       [id: string]: Res;
   };
}

export interface Res {
    'results': Object[];
}
