fn:deep-equal(
  fn:outermost(//*),
  let $nodes := //*
  return $nodes except $nodes/descendant::node()
)
