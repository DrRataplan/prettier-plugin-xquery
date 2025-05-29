let $xsl :=
  "<xsl:stylesheet version='2.0' xmlns:xsl='http://www.w3.org/1999/XSL/Transform'>
                    <xsl:template name='main'>
                    <x><xsl:value-of select='static-base-uri()'/></x>
                    </xsl:template>
                    </xsl:stylesheet>"
return fn:transform(
    map {
      "stylesheet-text": $xsl,
      "initial-template": QName("", "main"),
      "stylesheet-base-uri": "http://www.example.com"
    }
  )?output
