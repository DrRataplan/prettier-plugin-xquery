let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            xmlns:xs='http://www.w3.org/2001/XMLSchema'
            xmlns:xalan='http://xml.apache.org'
            xmlns:my='http://www.w3.org/fots/fn/transform/myfunctions' version='2.0'>
            <xsl:variable name='v'>
              <a><b>42</b></a>
            </xsl:variable>  
            <xsl:template name='main'>
              <out product=""{system-property('xsl:vendor')}""><xsl:value-of select='xalan:node-set($v)/a/b'/></out>
            </xsl:template>  
        </xsl:stylesheet>"
return transform(
    map {
      "stylesheet-text": $xsl,
      "initial-template": fn:QName("", "main"),
      "delivery-format": "serialized",
      "requested-properties":
        map {
          fn:QName("http://www.w3.org/1999/XSL/Transform", "product-name"):
            "Xalan"
        }
    }
  )
