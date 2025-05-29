for $node in
  ((//price/text()), (//price/text())) intersect
    ((//price/text()), (//price/text()))
return <a> {
    $node
  } </a>
