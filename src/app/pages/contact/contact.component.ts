import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  constructor(private fb: FormBuilder, private portfolioService: PortfolioService) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.maxLength(300), Validators.minLength(30)]]

    })
  }

  ngOnInit(): void {

  }
  Enviar() {

    console.log('enviar')
    this.portfolioService.onCreatePost(this.contactForm.value)
      .subscribe(resp => {
        try {
          Swal.fire({

            icon: 'success',
            title: 'Email Send',
            showConfirmButton: false,
            timer: 1500
          })
          this.contactForm.reset()
        } catch (error) {
          console.log(error)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error}`,
            footer: '<a href="">Why do I have this issue?</a>'
          })
          this.contactForm.reset()
        }

      })

  }

}
