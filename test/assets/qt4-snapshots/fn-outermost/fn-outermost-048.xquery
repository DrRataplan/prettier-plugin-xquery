fn:deep-equal(
  fn:outermost(/root/level[1]/following-sibling::node()),
  let $nodes := /root/level[1]/following-sibling::node()
  return $nodes except $nodes/descendant::node()
)
