import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Student } from '../model/student.model';

@Injectable()
export class StudentProvider {

    constructor(public http: HttpClient) { }

    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    private studentURL = environment.api + 'student';

    getStudents(): Observable<Object> {
        return this.http.get(this.studentURL)
            .pipe(
                (res => res)
            );
    }

    editStudent(student: Student): Observable<Object> {
        return this.http.post(this.studentURL, student)
            .pipe(
                (res => res)
            );
    }



}