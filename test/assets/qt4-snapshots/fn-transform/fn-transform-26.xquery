let $xsl :=
"<xsl:stylesheet version='3.0' xmlns:xsl='http://www.w3.org/1999/XSL/Transform'>
                <xsl:variable name='dateTime' static='yes' select='current-dateTime()'/>
                <xsl:template match='/'>
                    <x><xsl:value-of select='$dateTime'/></x>
                </xsl:template>
            </xsl:stylesheet>"
return let $output1 := fn:transform(
    map {
      "stylesheet-text": $xsl,
      "source-node": parse-xml("<doc1/>"),
      "cache": true()
    }
  )?output//x/string()
  return let $output2 := fn:transform(
      map {"stylesheet-text": $xsl, "source-node": parse-xml("<doc2/>")}
    )?output//x/string()
    return trace($output1, "output1") eq trace($output2, "output2")
