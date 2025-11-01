let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' xmlns:xs='http://www.w3.org/2001/XMLSchema'
            version='4.0'> 
            <xsl:template match='.' as='xs:integer'>
              <xsl:sequence select='() otherwise 10.'/>
            </xsl:template> 
        </xsl:stylesheet>"
return transform(
    map {
      "stylesheet-text": $xsl,
      "delivery-format": "raw",
      "xslt-version": 4.0,
      "initial-match-selection": 1 to 5
    }
  )?output
