import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    private _baseUrl='http://localhost:8080/api/email';

    constructor(private _httpRequest: HttpClient) {}

    public sendMesage(body: any): Observable<any> {
        return this._httpRequest.post(`${this._baseUrl}/send`, body);
    }

}