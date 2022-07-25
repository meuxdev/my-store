import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { saveAs } from 'file-saver';
import { environment } from 'src/environments/environment';
import { TFileResponse } from '@models/filesResponse.model';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  private baseURL: string = `${environment.API_URL}/api/files`;

  constructor(private http: HttpClient) {}

  download(name: string, url: string, type: string) {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      // response type blob
      tap((content) => {
        const blob = new Blob([content], { type }); // create the blob
        saveAs(blob, name); // save the blob with the name
      }),
      map(() => true) // return just a boolean
    );
  }

  upload(file: Blob) {
    const dto = new FormData(); // native type for blob files.
    dto.append('file', file);
    return this.http.post<TFileResponse>(`${this.baseURL}/upload`, dto, {
      // headers: {
      //   'Content-type': 'multipart/form-data', //! in some case for the backend
      // },
    });
  }
}
