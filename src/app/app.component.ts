import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OfComponent } from "./operators/of/of.component";
import { FromComponent } from "./operators/from/from.component";
import { RangComponent } from "./operators/rang/rang.component";
import { IntervalComponent } from "./operators/interval/interval.component";
import { AjaxComponent } from "./operators/ajax/ajax.component";
import { CreateComponent } from "./operators/create/create.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OfComponent, FromComponent, RangComponent, IntervalComponent, AjaxComponent, CreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs-tutorials';
}
