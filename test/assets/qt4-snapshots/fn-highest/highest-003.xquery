declare default collation "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive";

highest(
  doc("highest/highest-003.xml")/*/*,
  (),
  function ($item as element()) { xs:string($item) }
)
