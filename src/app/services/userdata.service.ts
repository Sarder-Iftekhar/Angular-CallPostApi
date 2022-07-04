import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url='https://api.agify.io/?name=bella'

  constructor(private http:HttpClient) { }
  saveUser(data:any)
  {
    return this.http.post(this.url,data)

  }

}
