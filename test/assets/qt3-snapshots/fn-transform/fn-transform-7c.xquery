let $xsl :=
"<out xmlns:xsl='http://www.w3.org/1999/XSL/Transform' xsl:version='2.0'>
                          <xsl:value-of select='.' />
                         </out>"
return transform(
  map {
    "stylesheet-node": parse-xml($xsl)/*,
    "source-node": parse-xml("<doc>this</doc>")
  }
)
