let $src := parse-xml-fragment(
  "<doc>this</doc>
                         <out xmlns:xsl='http://www.w3.org/1999/XSL/Transform' xsl:version='2.0'>
                          <xsl:value-of select='/doc' />
                         </out>"
)
return transform(map {"stylesheet-node": $src/out, "source-node": $src})
