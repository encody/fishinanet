import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'typeorm';
import { Habitat } from '../../../../server/src/entity/Habitat';
import { HabitatType } from '../../../../server/src/entity/HabitatType';
import { MassReading } from '../../../../server/src/entity/MassReading';
import { TempReading } from '../../../../server/src/entity/TempReading';
import { User } from '../../../../server/src/entity/User';


export { User, Habitat, HabitatType, MassReading, TempReading, };

const endpoints: Map<any, string> = new Map();

endpoints.set(User, 'user');
endpoints.set(Habitat, 'habitat');
endpoints.set(HabitatType, 'habitatType');
endpoints.set(MassReading, 'massReading');
endpoints.set(TempReading, 'tempReading');

@Injectable()
export class ApiService {
    private baseUrl = 'http://localhost:3000';

    constructor (
        private http: HttpClient,
    ) { }

    public getAll<T> (type: any): Observable<T[]> {
        const endpoint = endpoints.get(type) || type;
        return this.http.get(this.baseUrl + '/' + endpoint)
            .pipe(
                map((res: object) => <T[]> <unknown> res),
            )
        ;
    }

    public save<T> (type: any, obj: T): Observable<void> {
        const endpoint = endpoints.get(type) || type;
        return this.http.post(this.baseUrl + '/' + endpoint, obj)
            .pipe(
                map(() => void 0),
            )
        ;
    }

    public delete<T> (type: any, id: number): Observable<void> {
        const endpoint = endpoints.get(type) || type;
        return this.http.delete(this.baseUrl + '/' + endpoint + '/' + id)
            .pipe(
                map(() => void 0),
            )
        ;
    }

    public get<T> (type: any, id: number): Observable<T> {
        const endpoint = endpoints.get(type) || type;
        return this.http.get(this.baseUrl + '/' + endpoint + '/' + id)
            .pipe(
                map((res: object) => <T> <unknown> res),
            )
        ;
    }
}
