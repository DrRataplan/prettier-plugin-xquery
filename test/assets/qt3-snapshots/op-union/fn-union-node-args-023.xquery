string-join(
  for $node in
    ((//price/text()), (//price/text())) union
      ((//price/text()), (//price/text()))
  return $node,
  "|"
)
