lowest(
  doc("highest/highest-003.xml")/*/*,
  "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive",
  function ($item as element()) { xs:string($item) }
)
