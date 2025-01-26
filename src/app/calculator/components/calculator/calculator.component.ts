import { ChangeDetectionStrategy, Component, computed, inject, viewChildren } from '@angular/core';
import { CalculatorButtonComponent } from "../calculator-button/calculator-button.component";
import { CalculatorService } from '@/calculator/services/calculator.service';

const keyEquivalents: Record<string, string> = {
    Escape: 'C',
    Clear: 'C',
    c: 'C',
    '*': '⨉',
    '/': '÷',
    Enter: '='
}

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
    private _calculatorService = inject(CalculatorService);
    public calculatorButtons = viewChildren(CalculatorButtonComponent);

    public resultText = computed(() => this._calculatorService.resultText());
    public subResultText = computed(() => this._calculatorService.subResultText());
    public lastOperator = computed(() => this._calculatorService.lastOperator());

    handleClick(key: string) {
        const keyValue = keyEquivalents[key] ?? key;
        this._calculatorService.constructOperation(keyValue);
    }

    // @HostListener('document:keyup', ['$event']) – (ya no se recomienda, se cambia por la escritura en host)
    handleKeyboardEvent({key}: KeyboardEvent) {
        const keyValue = keyEquivalents[key] ?? key;
        this.handleClick(keyValue);

        this.calculatorButtons().forEach(button => {
            button.keyboardPressedStyle(keyValue)
        })
    }
}
