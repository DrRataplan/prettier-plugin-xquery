fn:deep-equal(
  fn:outermost(/root/level[1]/level[last()]/preceding::node()),
  let $nodes := /root/level[1]/level[last()]/preceding::node()
  return $nodes except $nodes/descendant::node()
)
