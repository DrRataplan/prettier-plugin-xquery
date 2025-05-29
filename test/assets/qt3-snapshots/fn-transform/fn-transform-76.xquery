let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            version='3.0'>
            <xsl:mode streamable='yes'/>
            <xsl:template match='/'>
              <out><xsl:value-of select='x/y/z'/></out>
            </xsl:template> 
            <xsl:template name='main'>
              <out>ok</out>
            </xsl:template> 
        </xsl:stylesheet>"
return transform(
    map {
      "stylesheet-text": $xsl,
      "delivery-format": "serialized",
      "initial-template": fn:QName("", "main"),
      "requested-properties":
        map {
          fn:QName(
            "http://www.w3.org/1999/XSL/Transform",
            "supports-streaming"
          ): true()
        }
    }
  )
