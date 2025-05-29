(
  insert-before(("a", "b", "c"), 1, ("x", "y")),
  insert-before(("a", "b", "c"), 2, ("x", "y")),
  insert-before(("a", "b", "c"), 10, ("x", "y")),
  insert-before(("a", "b", "c"), 0, ("x", "y")),
  insert-before(("a", "b", "c"), 2, ()),
  insert-before((), 3, ("a", "b", "c"))
)
