import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class articlesService {
  constructor(private http: Http) { }

//this is service to get list files a Corpus. this function requests "/ fs / FilesCorpus / '
   getText(_link: string) {
      console.log("service UIMA FILE client"+ _link);
      return this.http.get('/articles/project/' + _link).map((response: Response) => response.text());;
  }
}