import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import QuestionSet from '../models/question-set.model';
import Question from '../models/question.model';
import { QuestionSetService } from '../services/question-set.service';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions;
  sets;
  defaultSetSelected: Boolean = false;
  selectedSetID: String;
  tempQuestion = new Question('');
  selectedQID: number = null;
  role:String;
  constructor(
    private qService: QuestionService, private setService: QuestionSetService,private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getData()
    this.role = localStorage.getItem('role')
  }

  getData() {
    this.setService.getSets()
      .subscribe(res => {
        this.sets = res
        let id = localStorage.getItem('activated')
        let activatedSet = res.find(s => s._id == id)
        this.setChange(activatedSet)
        
      })
  }

  setChange(set) {
    this.selectedSetID = set._id
    this.questions = set.questions
    this.defaultSetSelected = set.default
    localStorage.setItem('activated', set._id)
  }

  onAddClick() {
    let qn = new Question(this.selectedSetID)
    this.questions.push(qn)
    this.editQuestion(qn, this.questions.length - 1)
  }

  editQuestion(qn, i) {
    this.tempQuestion = { ...qn }
    this.selectedQID = i
  }

  updateQuestion(i) {
    // console.log(this.tempQuestion)
    this.qService.editQuestion(this.tempQuestion)
      .subscribe(res => {
        this.questions[i] = {...res}
        this.selectedQID = null
        this.tempQuestion = new Question('')
        this._snackBar.open("Question Updated.","Success",{duration:2000});
      })
  }

  cancelUpdate() {
    if (!this.tempQuestion._id) this.questions.pop()
    this.selectedQID = null
    this.tempQuestion = new Question('')
  }

  removeQuestion(question, i) {
    this.qService.removeQuestion(question._id)
      .subscribe(res => {
        this.questions.splice(i, 1)
        this._snackBar.open("Question Removed.","Success",{duration:2000});
      })
  }

  clone(set) {
    let newSet = new QuestionSet()
    newSet.setName = "Layout " + this.sets.length
    let newQuestions = set.questions.map(q => {
      return { description: q.description, type: q.type }
    })
    newSet.questions = newQuestions
    this.setService.createSet(newSet)
      .subscribe(res => {
        this._snackBar.open("Layout Created.","Success",{duration:2000});
        this.getData()
      })

  }

  removeSet(set, i) {
    this.sets.splice(i, 1)
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username')
    localStorage.removeItem('role')
  }

}
