fn:deep-equal(
  fn:innermost(/root/level[1]/level[1]/ancestor::node()),
  let $nodes := /root/level[1]/level[1]/ancestor::node()
  return $nodes except $nodes/ancestor::node()
)
