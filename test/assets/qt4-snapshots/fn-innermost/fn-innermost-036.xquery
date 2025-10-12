fn:deep-equal(
  fn:innermost(//node()),
  let $nodes := //node()
  return $nodes except $nodes/ancestor::node()
)
