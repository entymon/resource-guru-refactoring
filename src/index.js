const operators = {
  '+': (a, b) => (a + b),
  '-': (a, b) => (a - b),
  'x': (a, b) => (a * b),
  '÷': (a, b) => {
    if (b === 0) throw new Error('The right argument cannot be 0!')
    return a / b
  },
}

const Node = (operator, value, left = null, right = null) => {
  const result = function () {
    if (this.operator) {
      return operators[this.operator](left.result(), right.result())
    }
    return value;
  };

  const toString = function () {
    if (this.operator) {
      return `(${left.toString()} ${this.operator} ${right.toString()})`;
    }
    return value.toString();
  };

  return {
    operator,
    value,
    left,
    right,
    result,
    toString
  };
};

const tree = Node(
  "÷",
  null,
  Node(
    "+",
    null,
    Node("", 7),
    Node(
      "x",
      null,
      Node("-", null, Node("", 3), Node("", 2)),
      Node("", 5)
    )
  ),
  Node("", 6)
);

export default tree;