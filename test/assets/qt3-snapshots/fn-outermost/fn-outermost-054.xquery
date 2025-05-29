fn:deep-equal(
  fn:outermost(($doc1//node(), $doc2//node())),
  let $nodes := ($doc1//node(), $doc2//node())
  return $nodes except $nodes/descendant::node()
)
