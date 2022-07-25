import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private http: HttpClient) {}

  getFile(name: string, url: string, type: string) {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      // response type blob
      tap((content) => {
        const blob = new Blob([content], { type }); // create the blob
        saveAs(blob, name); // save the blob with the name
      }),
      map(() => true) // return just a boolean
    );
  }
}
