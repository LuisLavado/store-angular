import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';

  constructor() {
    // No Async
    // before render
    // once
    console.log('Constructor executed.');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    // every time an input changes
    console.log('ngOnChanges executed.', changes);
    console.log('-'.repeat(10));
  }

  ngOnInit() {
    // after render
    // once
    // when the component is initialized
    // async, then, subscribe, etc.
    // this is the best place to fetch data
    console.log('ngOnInit executed.');
    console.log('-'.repeat(10));
    console.log('Duration:', this.duration);
    console.log('Message:', this.message);
  }

  ngAfterViewInit() {
    // after render
    // children components are initialized
    // once
    console.log('ngAfterViewInit executed.');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy executed.');
    console.log('-'.repeat(10));
  }
}
