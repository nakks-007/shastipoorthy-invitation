import { Component } from '@angular/core';
import { APP_COMMIT, APP_VERSION, BUILD_DATE } from '../../../environments/version';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  //version = 'v1.0.0';
  version = APP_VERSION;
  commit = APP_COMMIT;
  buildDate = BUILD_DATE;
}
