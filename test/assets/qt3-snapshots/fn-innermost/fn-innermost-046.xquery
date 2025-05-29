fn:deep-equal(
  fn:innermost(/root/level[1]/level[last()]/preceding::node()),
  let $nodes := /root/level[1]/level[last()]/preceding::node()
  return $nodes except $nodes/ancestor::node()
)
