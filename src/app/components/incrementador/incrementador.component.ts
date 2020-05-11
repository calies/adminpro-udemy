import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input('nombre')
  leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);
  }

  ngOnInit(): void {
    console.log('Leyenda', this.leyenda);
  }

  onChanges(newValue: number) {
    // let elemHTML: any = this.txtProgress;

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = Number(this.progreso);

    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    if (this.progreso + valor > 100 || this.progreso + valor < 0) {
      return;
    }

    this.progreso = Number(this.progreso) + valor;

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }
}
