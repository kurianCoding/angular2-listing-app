private listUrl = '172.17.0.2:3000/';  // URL to web api

constructor(private http: Http) { }

getHeroes(): Promise<Hero[]> {
  return this.http.get(this.listUrl)
             .toPromise()
             .then(response => response.json().data as Hero[])
             .catch(this.handleError);
}

private handleError(error: any): Promise<any> {
  return Promise.reject(error.message || error);
}
