import { Component, signal } from '@angular/core';

import { CounterComponent } from '@shared/components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { WaveAudioComponent } from '../../components/wave-audio/wave-audio.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CounterComponent, WaveAudioComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
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
