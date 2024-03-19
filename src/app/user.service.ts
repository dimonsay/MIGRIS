import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDeletedSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public userDeleted$: Observable<any> = this.userDeletedSubject.asObservable();

  url: string = 'http://127.0.0.1:8000/'


  constructor(private http: HttpClient) { }

  createUser(data:any){
    return this.http.post<any[]>(this.url + 'users/', data);
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'users/');
  }

  getUser(id: any): Observable<any> {
    return this.http.get<any[]>(this.url + 'users/' + id + '/');
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete<any>(this.url + 'users/' + id + '/').pipe(
      tap(() => {
        // Посылаем сигнал об удалении пользователя всем подписчикам
        this.userDeletedSubject.next(id);
      })
    );
  }

  sendChange(id: any, key: any, value: any): Observable<any> {
    const data = {
      [key]: value
    };
    return this.http.patch<any>(this.url + 'users/' + id + '/', data);
  }
}
