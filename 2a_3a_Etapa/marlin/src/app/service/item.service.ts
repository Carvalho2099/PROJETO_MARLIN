import { Item } from './../models/item';
import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ItemService{

    url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient){}

  httpOptions ={
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  getItems(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(this.url)
    .pipe(retry(2),catchError(this.handleError))
    console.log(this)
  }
  
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}