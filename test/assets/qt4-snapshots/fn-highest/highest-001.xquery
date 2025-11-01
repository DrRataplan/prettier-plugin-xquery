highest(
  doc("highest/highest-001.xml")/*/*,
  (),
  function ($item as element()) { xs:decimal($item) }
)
