import { QuoteService } from './../../services/quote.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Quote } from 'src/app/core/domain/quote.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  quote: Quote;
  constructor(private fb: FormBuilder, private quoteService$: QuoteService) {
    this.getQuote();
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['fi@gmail', Validators.compose([Validators.required, Validators.email, this.validate])],
      password: ['', Validators.required],
    });
  }
  onSubmit({ value, valid }, event) {
    event.preventDefault();
  }

  getQuote() {
    this.quoteService$.getQuote().subscribe(q => (this.quote = q));
  }

  validate(c: FormControl): { [key: string]: any } {
    if (!c.value) {
      return null;
    }

    const pattern = /^fan+/;
    if (pattern.test(c.value)) {
      return null;
    }
    return {
      emailNotValid: 'The email must start with fan',
    };
  }
}
