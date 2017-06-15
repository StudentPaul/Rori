import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginHttpService {

  constructor() { }

  studentToken = {"access_token":"vhQ3JkunJ_Mj6QtX_XlBGVL3GeTV3GQEm4zAhRuJvOT_Zn2ef3Jve-fa4JXSMsDlmnfPFq5ioroKMDBGy9L6j9uxIi7LLz9NfJzUs8JMSTd_XDL4t-q1IHOshvrp58N08j1kjzBIdopr97EnvePSwn5piOXUAUedYW4jHEsAdwLU0S1fYlzXvKOQZ6YZQ4BBVaIGb-xKbtg4ARefxSCiAmYT0GW6CeCgBF9qu77IDQriFJ7pstiIvmtJg1wkN5y74RsoFuZYwzGv-dwESKoqr_Gmfosl1Uo1GcC0lR6zNDRonbrxgtT01_uMJL_b5Lwv8L4ymLLDUSbBQoLMw9JT3gcd-7teUxUHLGl-Jd9TPDJYLZkg8_787KivrqNqjFQwYr8X0ZtrY0jsRGq65HF5IvYCjOfX20NX0ydBhizG7FWTBZCym64vv0u51ui0wZBybpWFY53Y1_CNXh6g_nZnp5tyolG143SmLFos1dMCVJ_6vKTNYJcnIQ7GC8Ymz53nKvJtYPLRb3Whx6vSNbZM8g","token_type":"bearer","expires_in":1209599,"userName":"Student@gmail.com","Roles":"Student",".issued":"Wed, 14 Jun 2017 17:23:29 GMT",".expires":"Wed, 28 Jun 2017 17:23:29 GMT"};
  teacherToken = {"access_token":"28Q3JkunJ_Mj6QtX_Xl3GeTVuJvOT_Zn2ef3Jve-fBGVLa4JXSMsDlmnfPFq5ioroKMDBGy93GQEm4zAhRL6j9uxIi7LLz9NfJzUs8JMSTd_XDL4t-q1IHOshvrp58N08j1kjzBIdopr97EnvePSwn5piOXUAUedYW4jHEsAdwLU0S1fYlzXvKOQZ6YZQ4BBVaIGb-xKbtg4ARefxSCiAmYT0GW6CeCgBF9qu77IDQriFJ7pstiIvmtJg1wkN5y74RsoFuZYwzGv-dwESKoqr_Gmfosl1Uo1GcC0lR6zNDRonbrxgtT01_uMJL_b5Lwv8L4ymLLDUSbBQoLMw9JT3gcd-7teUxUHLGl-Jd9TPDJYLZkg8_787KivrqNqjFQwYr8X0ZtrY0jsRGq65HF5IvYCjOfX20NX0ydBhizG7FWTBZCym64vv0u51ui0wZBybpWFY53Y1_CNXh6g_nZnp5tyolG143SmLFos1dMCVJ_6vKTNYJcnIQ7GC8Ymz53nKvJtYPLRb3Whx6vSNbZM8g","token_type":"bearer","expires_in":1209599,"userName":"Teacher@gmail.com","Roles":"Teacher",".issued":"Wed, 14 Jun 2017 17:23:29 GMT",".expires":"Wed, 28 Jun 2017 17:23:29 GMT"};




  getToken(email: string, password: string): Observable<any>{
    if (email === 'student@gmail.com' && password === "Password-123")
    return Observable.create(observer=>{
      observer.next(this.studentToken);
      observer.complete();
    });
    if (email === 'teacher@gmail.com' && password === "Password-123")
      return Observable.create(observer=>{
        observer.next(this.teacherToken);
        observer.complete();
      });
    return Observable.create(observer=>{
      observer.error('The user name or password is incorrect.');
      observer.complete();
    });

  }
  logout(): Observable<any>{
    return Observable.create(observer=>{
      observer.next({});
      observer.complete();
    })
  }

}
