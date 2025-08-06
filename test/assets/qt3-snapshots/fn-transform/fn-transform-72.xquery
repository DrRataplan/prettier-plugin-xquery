let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            version='2.0'>
            <xsl:template name='main'>
              <out><xsl:value-of select=""substring(current-date(), 1, 2) = '20'"" version='1.0'/></out>
            </xsl:template>  
        </xsl:stylesheet>"
return transform(
  map {
    "stylesheet-text": $xsl,
    "initial-template": fn:QName("", "main"),
    "delivery-format": "serialized",
    "requested-properties":
      map {
        fn:QName(
          "http://www.w3.org/1999/XSL/Transform",
          "supports-backwards-compatibility"
        ): true()
      }
  }
)
