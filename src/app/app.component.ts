import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

class Item{
  purchase: string;
  done: boolean;
  price: number;

  constructor(purchase: string, price: number) {

      this.purchase = purchase;
      this.price = price;
      this.done = false;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  text: string = "";
  price: number = 0;

  items: Item[] =
  [
      { purchase: "Хлеб", done: false, price: 15.9 },
      { purchase: "Масло", done: false, price: 60 },
      { purchase: "Картофель", done: true, price: 22.6 },
      { purchase: "Сыр", done: false, price:310 }
  ];
  addItem(text: string, price: number): void {

      if(text==null || text.trim()=="" || price==null)
          return;
      this.items.push(new Item(text, price));
  }
}
