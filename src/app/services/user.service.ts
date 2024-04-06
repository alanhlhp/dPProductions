import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _baseUrl='http://localhost:8080/api/user';

    constructor(private _httpRequest: HttpClient) {}

    public getUsers(): Observable<any> {
        return this._httpRequest.get(`${this._baseUrl}/list`);
    }

    public getUserById(id: number): Observable<any> {
        return this._httpRequest.get(`${this._baseUrl}/${id}`);
    }
}