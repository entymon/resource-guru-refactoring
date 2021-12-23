import { Node } from './node.js'

const tree = Node("÷", null,
  Node("+", null,
    Node("", 7),
    Node("x", null,
      Node("-", null,
        Node("", 3),
        Node("", 2)
      ),
      Node("", 5)
    )
  ),
  Node("", 6)
);

export {
    tree
}