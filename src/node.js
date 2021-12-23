import { operators } from './operators.js'

const Node = (operator, value, left = null, right = null) => {
    const result = function () {
      if (operator && (left !== null || right !== null)) {
        return operators[operator](left.result(), right.result())
      }
      return value;
    };

    const toString = function () {
      if (operator && (left !== null || right !== null)) {
        return `(${left.toString()} ${operator} ${right.toString()})`;
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

  export {
      Node
  }