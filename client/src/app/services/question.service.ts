import { Injectable } from '@angular/core';
import Question from '../models/question.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  domain_url = '';
  api_Url = `${this.domain_url}/api/questions`;

  constructor(
    private http: HttpClient
  ) { }


  createQuestion(qn: Question) {
    return this.http.post(`${this.api_Url}`, qn);
  }

  getQuestions(){
    return this.http.get(this.api_Url).pipe(
      map(res  => {
        return res["data"] as Question[];
      })
    )
    
  }

  editQuestion(qn:Question){
    let editUrl = `${this.api_Url}`
    return this.http.put(editUrl, qn).pipe(
      map(res  => {
        return res["data"] as Question[];
      })
    )
  }

  removeQuestion(id:string):any{
    let deleteUrl = `${this.api_Url}/${id}`
    return this.http.delete(deleteUrl)
    // .map(res  => {
    //   return res;
    // })
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
