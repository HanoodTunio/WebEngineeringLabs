// Global scope
let name = "Global Scope";  // This variable is globally scoped

function showScopes() {
    // Function scope
    let name = "Function Scope";  // This variable is function-scoped
    
    console.log("Inside function: " + name);  // Logs: "Function Scope"
    
    if (true) {
        // Block scope inside the function
        let name = "Block Scope 1";  // This variable is block-scoped
        console.log("Inside block 1: " + name);  // Logs: "Block Scope 1"
    }

    if (true) {
        // Another block scope inside the function
        let name = "Block Scope 2";  // Another block-scoped variable
        console.log("Inside block 2: " + name);  // Logs: "Block Scope 2"
    }

    console.log("After blocks in function: " + name);  // Logs: "Function Scope"
}

// Calling the function
showScopes();

console.log("Outside function (Global scope): " + name);  // Logs: "Global Scope"
