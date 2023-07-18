import { Component } from '@angular/core';
import packageJson  from '../../../../package.json';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  version : String = packageJson.version
  environmentName : String = environment.name

}
