import { Component } from '@angular/core';
import {FooComponent} from "./foo/foo.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'teaching-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FooComponent, RouterOutlet, RouterLink]
})
export class AppComponent {
  title = 'standalone-app';
}
