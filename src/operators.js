const operators = {
  '+': (a, b) => (a + b),
  '-': (a, b) => (a - b),
  'x': (a, b) => (a * b),
  '÷': (a, b) => {
    if (b === 0) throw new Error('The right argument cannot be 0!')
    return a / b
  },
}

export {
  operators
}