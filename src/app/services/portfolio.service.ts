import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Portfolio } from '../interfaces/portfolio.interface';
const url = environment.URL;
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { }

  getPortfolios() {
    return this.http.get<Portfolio[]>(`${url}/portfolio.json`)
  }
  getPortfolio(id: number) {

    return this.http.get<Portfolio>(`${url}/portfolio/${id}.json`)
  }

  onCreatePost(data: any) {
    console.log(data)
    // Send Http request
    return this.http.post(`${url}/posts.json`, data)
  }
}
