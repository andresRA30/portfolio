import { Component, OnInit, Output } from '@angular/core';
import { Portfolio } from 'src/app/interfaces/portfolio.interface';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios!: Portfolio[];
  portfolio2!: Portfolio;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolios()
      .subscribe(portfolios => {
        this.portfolios = portfolios;
      })
  }
  onClick(id: number) {
    console.log(id)
    this.portfolioService.getPortfolio(id)
      .subscribe(resp => {
        this.portfolio2 = resp;
      })
  }
}
