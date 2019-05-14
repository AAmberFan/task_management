import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

declare module 'rxjs' {
  interface Observable<T> {
    debug: (...any) => Observable<T>;
  }
}
Observable.prototype.debug = function(message: string) {
  return this.do(
    (next) => {
      if(!environment.production) {
        console.log(message, next);
      }
    },
    (err) => {
      if(!environment.production) {
        console.error(message, err);
      }
    },
    () => {
      if(!environment.production) {
        console.log('Complete -');
      }
    }
  );
}
