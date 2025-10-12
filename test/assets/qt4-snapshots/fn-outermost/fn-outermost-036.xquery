fn:deep-equal(
  fn:outermost(//node()),
  let $nodes := //node()
  return $nodes except $nodes/descendant::node()
)
