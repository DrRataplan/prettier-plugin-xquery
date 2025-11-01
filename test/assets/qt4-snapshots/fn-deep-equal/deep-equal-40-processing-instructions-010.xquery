deep-equal(
  parse-xml("<a><?foo (&#506;)?></a>"), parse-xml(
    "<a><?foo (A&#778;&#769;)?></a>"
  )
)
