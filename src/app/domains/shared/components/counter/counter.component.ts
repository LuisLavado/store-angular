import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message = '';

  constructor() {
    console.log('Constructor executed.');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges executed.', changes);
    console.log('-'.repeat(10));
  }

  // ngOnInit() {
  //   console.log('ngOnInit executed.');
  //   console.log('-'.repeat(10));
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck executed.');
  //   console.log('-'.repeat(10));
  // }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy executed.');
  //   console.log('-'.repeat(10));
  // }
}
