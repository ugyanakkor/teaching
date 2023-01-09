import {ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'teaching-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'change-detection';

  // 6. Change detector ref to manually turn off/on the change detection
/*  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 5000);
  }*/
}
