fn:deep-equal(
  fn:innermost(/root/level[1]/level[last()]/preceding-sibling::node()),
  let $nodes := /root/level[1]/level[last()]/preceding-sibling::node()
  return $nodes except $nodes/ancestor::node()
)
