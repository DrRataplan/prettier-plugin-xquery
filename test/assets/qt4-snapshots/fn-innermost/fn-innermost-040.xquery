fn:deep-equal(
  fn:innermost(/root/descendant::node()),
  let $nodes := /root/descendant::node()
  return $nodes except $nodes/ancestor::node()
)
