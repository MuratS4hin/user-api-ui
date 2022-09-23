import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    userValue: any;
    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    // public get userValue(): User {
    //     return this.userSubject.value;
    // }

    login(email: any, password: any) {
        return this.http.post<string>(`https://localhost:50188/api/Users/Login`, { email, password })
    }
    register(name: any, password: any, email: any, birthday: any, usersRole: any) {
        return this.http.post<UserModel>(`https://localhost:50188/api/Users/`, { name, password, email, birthday, usersRole })
    }
    // update(id: any, name: any, password: any, email: any, birthday: any, userRole: any){
    //     debugger;
    //     return this.http.put<UserModel>(`https://localhost:50188/api/Users/` + id, { Name: name, Password: password, Email: email, Birthday: birthday, UserRole: userRole})
    // }
    // logout() {
    //     // remove user from local storage and set current user to null
    //     localStorage.removeItem('user');
    //     this.userSubject.next(null);
    //     this.router.navigate(['/account/login']);
    // }

    // register(user: User) {
    //     return this.http.post(`${environment.apiUrl}/users/register`, user);
    // }

    // getAll() {
    //     return this.http.get<User[]>(`${environment.apiUrl}/users`);
    // }

    // getById(id: string) {
    //     return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    // }

    // update(id, params) {
    //     return this.http.put(`${environment.apiUrl}/users/${id}`, params)
    //         .pipe(map(x => {
    //             // update stored user if the logged in user updated their own record
    //             if (id == this.userValue.id) {
    //                 // update local storage
    //                 const user = { ...this.userValue, ...params };
    //                 localStorage.setItem('user', JSON.stringify(user));

    //                 // publish updated user to subscribers
    //                 this.userSubject.next(user);
    //             }
    //             return x;
    //         }));
    // }

    // delete(id: string) {
    //     return this.http.delete(`${environment.apiUrl}/users/${id}`)
    //         .pipe(map(x => {
    //             // auto logout if the logged in user deleted their own record
    //             if (id == this.userValue.id) {
    //                 this.logout();
    //             }
    //             return x;
    //         }));
    // }
}