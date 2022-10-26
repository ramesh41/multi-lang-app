import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetHistoryService {
  errorMsg: any | undefined;
  public apiURL = 'https://jsonplaceholder.typicode.com/todos/3';
  constructor(private httpClient: HttpClient) {}

  getHistoryInfo() {
    return this.httpClient.get(this.apiURL).pipe(
      catchError((error) => {
        if (error.error instanceof ErrorEvent) {
          this.errorMsg = `Error: ${error.error.message}`;
        } else {
          this.errorMsg = this.getServerErrorMessage(error);
        }
        return throwError(this.errorMsg);
      })
    );
  }

  createHistory(obj: any) {
    let requestObj: any = obj;
    return this.httpClient
      .post(this.apiURL, requestObj)
      .pipe(
        catchError((error) => {
          if (error.error instanceof ErrorEvent) {
            this.errorMsg = `Error: ${error.error.message}`;
          } else {
            this.errorMsg = this.getServerErrorMessage(error);
          }
          return throwError(this.errorMsg);
        })
      );
  }

  private getServerErrorMessage(error: HttpErrorResponse) {
    let errorObj: any = {
      '404': `Not Found: ${error.message}`,
      '403': `Access Denied: ${error.message}`,
      '500': `Internal Server Error: ${error.message}`,
    };
    return errorObj[error.status] || `Unknown Server Error: ${error.message}`;
  }
}
