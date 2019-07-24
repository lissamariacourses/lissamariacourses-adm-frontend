import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Course } from '../model/course.model';

@Injectable()
export class CourseProvider {

    constructor(public http: HttpClient) { }

    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    private courseURL = environment.api + 'course';

    getCourses(): Observable<Object> {
        return this.http.get(this.courseURL)
            .pipe(
                (res => res)
            );
    }

    editCourse(course: Course): Observable<Object> {
        return this.http.post(this.courseURL, course)
            .pipe(
                (res => res)
            );
    }



}