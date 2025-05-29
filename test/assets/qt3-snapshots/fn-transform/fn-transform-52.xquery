let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='3.0'>
                <xsl:param name='static-param' static='yes' select='&quot;success&quot;'/>
                <xsl:param name='alt-param' static='yes' select='upper-case($static-param)'/>
                <xsl:template match='/'>
                    <out><xsl:value-of select='$static-param'/><xsl:value-of select='$alt-param'/></out>
                </xsl:template>
            </xsl:stylesheet>"
return transform(
    map {
      "stylesheet-node": parse-xml($xsl),
      "source-node": parse-xml("<doc>this</doc>"),
      "static-params":
        map {
          QName("", "static-param"): "Hello",
          QName("", "alt-param"): "World"
        }
    }
  )
