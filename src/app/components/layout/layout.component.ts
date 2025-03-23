import { Component, input } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: 'layout.component.scss',
  imports: [NzBreadCrumbModule, NzIconModule, NzMenuModule, NzLayoutModule],
})
export class LayoutComponent {
}
