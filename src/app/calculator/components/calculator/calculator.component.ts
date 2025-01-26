import { ChangeDetectionStrategy, Component, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from "../calculator-button/calculator-button.component";

@Component({
    selector: 'calculator',
    imports: [CalculatorButtonComponent],
    templateUrl: './calculator.component.html',
    /* styles: `
    .is-command {
        @apply  bg-indigo-700/10;
    }
    `, */
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(document:keyup)': 'handleKeyboardEvent($event)'
    }
})
export class CalculatorComponent {
    public calculatorButtons = viewChildren(CalculatorButtonComponent);

    handleClick(key: string) {
        console.log({key});
    }

    // @HostListener('document:keyup', ['$event']) – (ya no se recomienda, se cambia por la escritura en host)
    handleKeyboardEvent({key}: KeyboardEvent) {
        const keyEquivalents: Record<string, string> = {
            Escape: 'C',
            Clear: 'C',
            c: 'C',
            '*': '⨉',
            '/': '÷',
            Enter: '='
        }

        const keyValue = keyEquivalents[key] ?? key;
        this.handleClick(keyValue);

        this.calculatorButtons().forEach(button => {
            button.keyboardPressedStyle(keyValue)
        })
    }
}
