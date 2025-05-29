let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            version='3.0'> 
            <xsl:template name='main'>
              <out><xsl:value-of select='array{1,2,3}(2)'/></out>
            </xsl:template> 
        </xsl:stylesheet>"
return transform(
    map {
      "stylesheet-text": $xsl,
      "delivery-format": "serialized",
      "initial-template": fn:QName("", "main"),
      "requested-properties":
        map {
          fn:QName("http://www.w3.org/1999/XSL/Transform", "xpath-version"):
            "3.1"
        }
    }
  )
