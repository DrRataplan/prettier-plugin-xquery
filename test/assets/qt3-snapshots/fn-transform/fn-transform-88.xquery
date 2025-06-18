let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            version='3.0' default-mode='x'> 
            <xsl:template match='/' mode='#unnamed'>WRONG</xsl:template>
            <xsl:template match='/' mode='x'>RIGHT</xsl:template>
        </xsl:stylesheet>"
return transform(
    map {
      "stylesheet-text": $xsl,
      "delivery-format": "raw",
      "base-output-uri": "http://example.com/",
      "source-node": parse-xml("<a><b>89</b></a>")
    }
  )
