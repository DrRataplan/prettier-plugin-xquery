fn:deep-equal(
  fn:outermost(/root/level[1]/level[1]/following::node()),
  let $nodes := /root/level[1]/level[1]/following::node()
  return $nodes except $nodes/descendant::node()
)
