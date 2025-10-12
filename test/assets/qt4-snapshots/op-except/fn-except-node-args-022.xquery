string-join(
  (
    for $node in ((//price/text()), (//price/text())) except (//price)
    return $node
  )/string(),
  "|"
)
