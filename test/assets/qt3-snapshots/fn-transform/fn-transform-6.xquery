let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='2.0'>
                <xsl:template match='/'>
                    <out>
                        <xsl:value-of select='.' />
                    </out>
                </xsl:template>
            </xsl:stylesheet>"
return transform(
    map {"stylesheet-text": $xsl, "source-node": parse-xml("<doc>this</doc>")}
  )
