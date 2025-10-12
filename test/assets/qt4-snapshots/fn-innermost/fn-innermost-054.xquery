fn:deep-equal(
  fn:innermost(($doc1//node(), $doc2//node())),
  let $nodes := ($doc1//node(), $doc2//node())
  return $nodes except $nodes/ancestor::node()
)
