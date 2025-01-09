import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'gynna';
  public nameUpper: string = 'GYNNA';
  public fullName: string = 'gYnnA PaOlA';

  public customDate: Date = new Date();

}
