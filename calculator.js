function sum(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  }

  if (typeof a === 'number' && typeof b === 'undefined') {
    return a + 0;
  }

  if (typeof a === 'undefined' && typeof b === 'number') {
    return b + 0;
  } else {
    return a + b;
  }
}

function subtract(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  }

  if (typeof a === 'number' && typeof b === 'undefined') {
    return a - 0;
  }

  if (typeof a === 'undefined' && typeof b === 'number') {
    return b - 0;
  } else {
    return a - b;
  }
}

function divide(a, b) {
  if (
    (typeof a === 'number' && b === 0) ||
    (a === 0 && typeof b === 'number')
  ) {
    throw new Error('An explanatory error message');
  } else {
    return a / b;
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
