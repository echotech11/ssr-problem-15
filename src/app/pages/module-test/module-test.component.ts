import { Component } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-module-test',
  templateUrl: './module-test.component.html',
  styleUrls: ['./module-test.component.scss']
})
export class ModuleTestComponent {
  data = this.service.getData();

  constructor(private service: TestService) {}
}
