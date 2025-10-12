fn:deep-equal(
  fn:outermost(/root/node()),
  let $nodes := /root/node()
  return $nodes except $nodes/descendant::node()
)
