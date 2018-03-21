import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log("directiva llamada");
    //el.nativeElement.style.backgroundColor = "cyan";
   }

   @Input("appResaltado") nuevoColor:string;

   @HostListener('mouseenter') mouseEntro(){

    this.resaltar(this.nuevoColor || 'cyan');

   }
   @HostListener('mouseleave') mouseSalir(){
    this.resaltar(null);
   }

   private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor = color;
   }
}
