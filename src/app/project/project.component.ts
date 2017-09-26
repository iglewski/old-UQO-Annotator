import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { articlesService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'project',
  templateUrl: 'project.component.html'
})

export class ProjectComponent implements OnInit {
 	
 	project: string;
 	text: string;

  constructor(private ArticlesService: articlesService) {
  this.project = JSON.parse(localStorage.getItem('linkProject'));
  }

  ngOnInit() {
   this.linkStockage();
  }
//get content from the text for the project department
  private linkStockage(){
  	if(this.project){
  	console.log(this.project);
  	this.ArticlesService.getText(this.project).subscribe(text => { this.text = text; });;
  	} //else the project is not available
    
  }
  
}
