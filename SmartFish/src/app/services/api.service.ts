import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Habitat } from '../habitat';
import { MassReading } from './model/MassReading';
import { TempReading } from './model/TempReading';

type Endpoint = 'user' | 'habitat' | 'habitatType' | 'massReading' | 'tempReading';

interface Session {
    userId: number;
    userName: string;
    token: string;
    expires: number;
}

@Injectable()
export class ApiService {
    private baseUrl = 'https://hidden-waters-96879.herokuapp.com';

    constructor (
        private http: HttpClient,
    ) { }

    public getSession (): Observable<Session | false> {
        return this.http.post(this.baseUrl + '/session', {}, { withCredentials: true }) as Observable<Session | false>;
    }

    public logout (): Observable<boolean> {
        return this.http.post(this.baseUrl + '/logout', {}, { withCredentials: true }) as Observable<boolean>;
    }

    public login (userName: string, pass: string): Observable<boolean> {
        return this.http.post(this.baseUrl + '/login', {
            userName,
            pass,
        }, { withCredentials: true }) as Observable<boolean>;
    }

    public getHabitatTempReadings (id: number): Observable<TempReading[]> {
        return this.http.get(this.baseUrl + '/habitat/' + id + '/tempReading', { withCredentials: true })
            .pipe(
                map((e: TempReading[] | false) => e || []),
            )
        ;
    }

    public getHabitatMassReadings (id: number): Observable<MassReading[]> {
        return this.http.get(this.baseUrl + '/habitat/' + id + '/massReading', { withCredentials: true })
            .pipe(
                map((e: MassReading[] | false) => e || []),
            )
        ;
    }

    public getHabitatTypeHabitats (id: number): Observable<Habitat[]> {
        return this.http.get(this.baseUrl + '/habitatType/' + id + '/habitat', { withCredentials: true })
            .pipe(
                map((e: Habitat[] | false) => e || []),
            )
        ;
    }

    public getAll<T> (endpoint: Endpoint): Observable<T[]> {
        return this.http.get(this.baseUrl + '/' + endpoint, { withCredentials: true })
            .pipe(
                map((res: object) => <T[]> <unknown> res),
            )
        ;
    }

    public update<T> (endpoint: Endpoint, id: number, obj: T): Observable<void> {
        return this.http.post(this.baseUrl + '/' + endpoint + '/' + id, obj, { withCredentials: true })
            .pipe(
                map(() => void 0),
            )
        ;
    }

    public create<T> (endpoint: Endpoint, obj: T): Observable<void> {
        return this.http.post(this.baseUrl + '/' + endpoint, obj, { withCredentials: true })
            .pipe(
                map(() => void 0),
            )
        ;
    }

    public delete<T> (endpoint: Endpoint, id: number): Observable<void> {
        return this.http.delete(this.baseUrl + '/' + endpoint + '/' + id, { withCredentials: true })
            .pipe(
                map(() => void 0),
            )
        ;
    }

    public get<T> (endpoint: Endpoint, id: number): Observable<T> {
        return this.http.get(this.baseUrl + '/' + endpoint + '/' + id, { withCredentials: true })
            .pipe(
                map((res: object) => <T> <unknown> res),
            )
        ;
    }
}
