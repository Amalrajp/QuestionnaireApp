import { Injectable } from '@angular/core';
import QuestionSet from '../models/question-set.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionSetService {
  domain_url = ''; 
  api_Url = `${this.domain_url}/api/sets`;

  constructor(
    private http: HttpClient
  ) { }


  createSet(qs: QuestionSet) {
    return this.http.post(`${this.api_Url}`, qs);
  }

  getSets(){
    return this.http.get(this.api_Url).pipe(
      map(res  => {
        return res["data"] as QuestionSet[];
      })
    )
  }

  // editSet(qs:QuestionSet){
  //   let editUrl = `${this.api_Url}`
  //   return this.http.put(editUrl, qs);
  // }

  // deleteSet(id:string):any{
  //   let deleteUrl = `${this.api_Url}/${id}`
  //   return this.http.delete(deleteUrl)
  //   // .map(res  => {
  //   //   return res;
  //   // })
  // }


}
