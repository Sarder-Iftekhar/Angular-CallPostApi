import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CallPostApi';

  constructor(private userData:UserdataService){}

  getUserFormData(data:any)
  {
    console.warn(data)
    this.userData.saveUser(data).subscribe((result)=>{
      console.warn(result)
       
    })

  }
}
