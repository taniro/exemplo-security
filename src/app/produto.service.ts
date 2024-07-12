import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, tap } from 'rxjs';

export interface Produto {
  id:string,
  nome:string,
  descricao:string
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private API_URL = "http://localhost:3000/produtos";

  constructor(private httpClient: HttpClient) {
  }

  public list(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.API_URL)
      .pipe(
        first(),
        tap(p => console.log(p))
      )
  }

  public create(p: Produto) {
    return this.httpClient.post<Produto>(this.API_URL, p);
  }

}
