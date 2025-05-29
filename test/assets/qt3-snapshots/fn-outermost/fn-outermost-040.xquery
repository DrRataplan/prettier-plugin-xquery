fn:deep-equal(
  fn:outermost(/root/descendant::node()),
  let $nodes := /root/descendant::node()
  return $nodes except $nodes/descendant::node()
)
