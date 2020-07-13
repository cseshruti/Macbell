import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { User } from '../_model';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }


}