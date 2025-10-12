fn:deep-equal(
  fn:outermost(/root/level[1]/level[last()]/preceding-sibling::node()),
  let $nodes := /root/level[1]/level[last()]/preceding-sibling::node()
  return $nodes except $nodes/descendant::node()
)
