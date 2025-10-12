let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            xmlns:xs='http://www.w3.org/2001/XMLSchema'
            version='2.0'>
                <xsl:template name='main' as='xs:integer'>
                    <xsl:sequence select='count(//*)'/>
                </xsl:template>
            </xsl:stylesheet>"
return transform(
    map {
      "stylesheet-text": $xsl,
      "source-node": parse-xml("<one><two/><three/><four/></one>"),
      "initial-template": QName("", "main"),
      "delivery-format": "raw"
    }
  )
