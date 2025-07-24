import { Component, signal } from '@angular/core';
import { HighlightDirective } from '@shared/directives/highlight.directive';

import { CounterComponent } from '@shared/components/counter/counter.component';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent, WaveAudioComponent, HighlightDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
  duration = signal(1000);
  message = signal('Counter');

  changeDuration(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.valueAsNumber;
    this.duration.set(value);
    console.log('Duration changed to:', value);
  }

  changeMessage(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.message.set(value);
    console.log('Message changed.');
  }
}
