# JavaScript Loose Typing Bug

This repository demonstrates a common yet subtle bug in JavaScript stemming from its dynamic typing system.  The code intends to add two numbers but produces unexpected results when non-numeric inputs are used.

## Bug Description
The `foo` function in `bug.js` is designed to add two numbers. However, it doesn't explicitly check the input types. If either input is a string, JavaScript performs string concatenation instead of numerical addition, leading to unexpected behavior.

## Solution
The solution, provided in `bugSolution.js`, addresses this by adding explicit type checking using `typeof` operator.  This ensures that only numbers are added, throwing an error if non-numeric input is provided.

This example highlights the importance of careful type handling in JavaScript to prevent unexpected behavior and maintain code reliability.