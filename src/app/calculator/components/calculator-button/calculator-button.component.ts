import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, input, output, signal, viewChild } from '@angular/core';

@Component({
    selector: 'calculator-button',
    imports: [CommonModule],
    templateUrl: './calculator-button.component.html',
    styleUrl: './calculator-button.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: "border-r border-b border-indigo-400", //host element
        // attribute: 'hola',
        // 'data-size': 'xl',
        '[class.w-2/4]': 'isDoubleSize()',
        '[class.w-1/4]': '!isDoubleSize()' // nueva sintaxis de hostBinding (se parece a ngClass)
    }
})
export class CalculatorButtonComponent {
    public isPressed = signal(false);
    public onClick = output<string>();
    public contentValue = viewChild<ElementRef<HTMLButtonElement>>('button');

    public isCommand = input(false, {
        transform: (value: boolean | string) => 
            typeof value === 'string' ? value === '' : value
    });
    public isDoubleSize = input(false, {
        transform: (value: boolean | string) =>
            typeof value === 'string' ? value === '' : value
    });

    /* Se reemplaza bloque por sintaxis con [] en host
    @HostBinding('class.w-2/4') get commandStyle() {
        return this.isDoubleSize();
    } */

    handleClick() {
        if(!this.contentValue()?.nativeElement) return;

        this.onClick.emit(this.contentValue()!.nativeElement.innerText.trim());
    }

    keyboardPressedStyle(key: string) {
        if(!this.contentValue()) return;

        const value = this.contentValue()!.nativeElement.innerText;
        if(value !== key) return;

        this.isPressed.set(true);

        setTimeout(() => {
            this.isPressed.set(false);
        }, 150);
    }
}
