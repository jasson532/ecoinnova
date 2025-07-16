import { Component, input } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';


@Component({
  selector: 'layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: 'layout.component.scss',
  imports: [NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule, NzGridModule, NzIconModule],
})
export class LayoutComponent {
}
