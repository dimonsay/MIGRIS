import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[validateOnBlur]' // Директива будет применяться ко всем элементам, на которых используется этот атрибут
})
export class ValidateOnBlurDirective {
  
  constructor(private el: ElementRef) { }
  
  @HostListener('blur') onBlur() {
    const inputElement: HTMLInputElement = this.el.nativeElement;
    
    if (inputElement.value.trim() === '') {
      inputElement.classList.add('invalid');
    } else {
      inputElement.classList.remove('invalid');
    }
  }
}