# Ciclo de Vida de Componentes en Angular

### ¿Qué es el ciclo de vida de un componente en Angular?
Cada componente en Angular tiene un ciclo de vida, lo que significa que pasa por varios eventos desde que es creado hasta que se destruye. Estos eventos incluyen su creación, actualización y eventual eliminación de la aplicación. Esta comprensión es crucial para manejar la lógica de los componentes de manera efectiva y aprovechar las capacidades de Angular para una experiencia de usuario fluida.

### ¿Cómo se desarrollan los eventos del ciclo de vida?
El ciclo de vida de un componente en Angular incluye un conjunto específico de eventos en orden, tales como `constructor`, `ngOnChanges`, `ngOnInit`, `ngDoCheck`, y finalmente `ngOnDestroy`. Aquí desglosamos estos eventos:

- constructor
- ngOnChanges
- ngOnInit
- ngDoCheck
    - ngAfterContentInit
    - ngAfterContentChecked
    - ngAfterViewInit
    - ngAfterViewCheck
- ngOnDestroy

1. **Constructor:** Es el primer método que se ejecuta al crear un componente. Aunque es un lugar para inicializar variables, es importante notar que cualquier acción asíncrona no debe colocarse en este punto, ya que no es lo recomendado. Es especialmente útil para asignar valores de manera directa y previa al renderizado del componente.

2. **ngOnChanges:** Corre tanto antes como durante el renderizado del componente. Es útil para detectar cambios en los @Input y adaptar la lógica en función de esas variaciones.

3. **ngOnInit:** Se ejecuta una sola vez después de haber aplicado los cambios y justo antes de que el componente se muestre por primera vez.

4. **ngDoCheck:** Proporciona una oportunidad para detectar y reaccionar frente a los cambios, para personalizar cómo funciona la detección de cambios personalizada.

5. **ngOnDestroy:** Se invoca justo antes de que Angular destruya el componente. Es el lugar perfecto para anular suscripciones y liberar recursos.

### Implementando el ciclo de vida en un componente Angular
Para experimentar estos eventos, vamos a crear un componente sencillo llamado `Counter` y una página `About` que lo contenga. Sigamos adelante con algunos pasos prácticos:

### Creando el componente Counter
Para trabajar con el ciclo de vida, configuremos dos entradas (`@Input`) dentro del componente:
```
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: '<p>Counter component loaded!</p>'
})
export class CounterComponent {
  @Input() duration: number = 0;
  @Input() message: string = '';

  constructor() {
    console.log('Constructor executed.');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges executed.', changes);
  }

  ngOnInit() {
    console.log('ngOnInit executed.');
  }

  ngDoCheck() {
    console.log('ngDoCheck executed.');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy executed.');
  }
}
```

### Aspectos clave al crear un componente
- **Inputs Requeridos:** Por defecto, duration es 0 y message es una cadena vacía. El motor de inferencia de TypeScript ayuda a detectar automáticamente sus tipos.

- **Uso del Constructor:** Solo se deben definir valores directos. Evita cualquier acción que implique promesas o procesos asíncronos.

- **Seguimiento de Cambios:** Utilizando ngOnChanges, puedes identificar qué especificaciones han cambiado mediante el objeto SimpleChanges.

Este conocimiento del ciclo de vida en Angular permite controlar cuándo y cómo se ejecutan ciertos segmentos de código, optimizando el rendimiento y la lógica del componente. Con la práctica y depuración continua, se convertirán en una herramienta esencial en el desarrollo de aplicaciones complejas.