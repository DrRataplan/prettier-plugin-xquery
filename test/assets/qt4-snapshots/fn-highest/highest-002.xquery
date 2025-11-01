highest(
  doc("highest/highest-001.xml")/*/*[@non-existent],
  (),
  function ($item as element()) { xs:decimal($item) }
)
