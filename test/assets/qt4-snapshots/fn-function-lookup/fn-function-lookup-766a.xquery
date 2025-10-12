function-lookup(
  fn:QName("http://www.w3.org/2005/xpath-functions", "transform"),
  1
)(
  map {
    "stylesheet-text":
      '<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"><xsl:template match="/"><out/></xsl:template></xsl:stylesheet>',
    "source-node": doc("function-lookup/collection-1.xml")
  }
)
