import {Component, ElementRef, ViewChild} from '@angular/core';
import {Observable, of} from "rxjs";

@Component({
  selector: 'teaching-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'custom-protocol';
  @ViewChild('iFrame') private readonly iFrameRef: ElementRef<HTMLIFrameElement> | undefined;

  openNativeApp(): void {
    this.getSrs()
      .subscribe((temp: string): void => {
        // btoa is deprecated from Node, but when we are working on the DOM
        // we can window.btoa() to work around IDE deprecation notice
        this.iFrameRef ? this.iFrameRef.nativeElement.src = `msteams:${window.btoa(temp)}` : undefined;
        console.log('SRC:', this.iFrameRef?.nativeElement.src);
      });
  }

  private getSrs = (): Observable<string> =>
    of(
      //btoa want a string, so we parse the object to a string
      JSON.stringify({
        parameter1: 'Parameter 1',
        parameter2: 'Parameter 2',
      }),
    );
}
