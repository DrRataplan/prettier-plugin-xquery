let $deep := deep-equal(
  ?,
  ?,
  "http://www.w3.org/2005/xpath-functions/collation/html-ascii-case-insensitive"
)
return $deep(<a><b>abc</b></a>, <a><b>ABC</b></a>)
