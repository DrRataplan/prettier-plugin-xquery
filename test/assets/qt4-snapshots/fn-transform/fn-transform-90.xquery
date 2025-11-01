let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='2.0'>
                <xsl:template match='/'>
                    <xsl:value-of select='1 to 5'/>
                </xsl:template>
            </xsl:stylesheet>"
return transform(
    map {
      "stylesheet-text": $xsl,
      "source-node": parse-xml("<doc>this</doc>"),
      "delivery-format": "raw"
    }
  )
