import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../test.service';

@Component({
  selector: 'app-standalone-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalone-test.component.html',
  styleUrls: ['./standalone-test.component.scss']
})
export class StandaloneTestComponent {
  
  data = this.service.getData();

  constructor(private service: TestService) {}
}
