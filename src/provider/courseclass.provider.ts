import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CourseClass } from '../model/courseclass.model';

@Injectable()
export class CourseClassProvider {

    constructor(public http: HttpClient) { }

    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    private courseclassURL = environment.api + 'courseclass';

    getCoursesClasses(): Observable<Object> {
        return this.http.get(this.courseclassURL)
            .pipe(
                (res => res)
            );
    }

    getCoursesClassesByClassId(id): Observable<Object> {
        return this.http.get(this.courseclassURL + "/class/" + id)
            .pipe(
                (res => res)
            );
    }

    editCourseClass(courseclass: CourseClass): Observable<Object> {
        return this.http.post(this.courseclassURL, courseclass)
            .pipe(
                (res => res)
            );
    }



}