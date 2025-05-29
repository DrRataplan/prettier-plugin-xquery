fn:deep-equal(
  fn:innermost(/root/level[1]/following-sibling::node()),
  let $nodes := /root/level[1]/following-sibling::node()
  return $nodes except $nodes/ancestor::node()
)
