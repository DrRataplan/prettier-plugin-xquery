fn:deep-equal(
  fn:outermost(/root/level[1]/level[1]/ancestor::node()),
  let $nodes := /root/level[1]/level[1]/ancestor::node()
  return $nodes except $nodes/descendant::node()
)
