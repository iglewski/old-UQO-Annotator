import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Injectable()
export class FsService {
  constructor(private http: Http) { }

  getCorpus() {
    return this.http.get('/fs/getCorpus').map((response: Response) => response.json());
  }

   getFilesCorpus(Corpus: string) {
      console.log("service "+ Corpus);
      return this.http.get('/fs/FilesCorpus/' + Corpus).map((response: Response) => response.json());;
  }
}