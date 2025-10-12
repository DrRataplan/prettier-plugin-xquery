fn:deep-equal(
  fn:innermost(/root/node()/..),
  let $nodes := /root/node()/..
  return $nodes except $nodes/ancestor::node()
)
