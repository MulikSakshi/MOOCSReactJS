let currentInput = '0';
        let operator = null;
        let previousInput = null;

        function inputNumber(number) {
            if (currentInput === '0') {
                currentInput = number.toString();
            } else {
                currentInput += number;
            }
            updateDisplay();
        }

        function inputDot() {
            if (!currentInput.includes('.')) {
                currentInput += '.';
            }
            updateDisplay();
        }
        function inputOperator(op) {
            currentInput += ` ${op} `;
            updateDisplay();
        }

        function inputParenthesis(paren) {
            currentInput += paren;
            updateDisplay();
        }

        function calculateResult() {
            try {
                currentInput = eval(currentInput.replace('×', '*').replace('÷', '/')).toString();
                updateDisplay();
            } catch (error) {
                currentInput = 'Error';
                updateDisplay();
            }
        }

        function clearDisplay() {
            currentInput = '0';
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('display').innerText = currentInput;
        }