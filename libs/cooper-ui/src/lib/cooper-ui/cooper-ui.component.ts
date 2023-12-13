import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cui-cooper-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cooper-ui.component.html',
  styleUrl: './cooper-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperUiComponent {}
