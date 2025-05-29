fn:deep-equal(
  fn:innermost(//*),
  let $nodes := //*
  return $nodes except $nodes/ancestor::node()
)
