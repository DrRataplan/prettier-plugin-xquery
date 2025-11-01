exactly-one(
  fn:analyze-string(
    concat("Mary", char(13), "Jones"), "y#dot#.#dot#J", "sc"
  )/fn:match
)/string()
