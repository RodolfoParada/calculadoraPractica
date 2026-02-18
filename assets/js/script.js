const screen = document.getElementById('screen');
let currentInput = ""; // Guarda lo que se va escribiendo

// 1. Función para obtener números y operadores
function getValue(id) {
    const element = document.getElementById(id);
    const value = element.innerText; // Obtenemos el texto del botón (+, -, 1, 2, etc.)
    
    currentInput += value; 
    screen.value = currentInput;
}

// 2. Función específica para el cero (como la llamaste en el HTML)
function getZero() {
    currentInput += "0";
    screen.value = currentInput;
}

// 3. Agregar punto decimal
function addDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += ".";
        screen.value = currentInput;
    }
}

// 4. Limpiar pantalla (AC)
function clearScreen() {
    currentInput = "";
    screen.value = "";
}

// 5. Resolver la operación (=)
function solve() {
    try {
        // eval() procesa el string como una operación matemática
        // Ejemplo: "2+2" se convierte en 4
        const result = eval(currentInput); 
        screen.value = result;
        currentInput = result.toString(); // Permitimos seguir operando sobre el resultado
    } catch (error) {
        screen.value = "Error";
        currentInput = "";
    }
}