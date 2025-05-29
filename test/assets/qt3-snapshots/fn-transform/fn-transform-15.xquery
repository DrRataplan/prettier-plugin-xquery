let $in := parse-xml("<dummy/>")/*,
  $style :=
  parse-xml(
    "<xsl:stylesheet version='1.0' xmlns:xsl='http://www.w3.org/1999/XSL/Transform'>
                        <xsl:param name='v'/>
                        <xsl:param name='w'/>
                        <xsl:param name='x'/>
                        <xsl:param name='y'/>
                        <xsl:template match='dummy'>
                        <out>
                            <v><xsl:value-of select='$v'/></v>
                            <w><xsl:value-of select='$w'/></w>
                            <x><xsl:value-of select='$x'/></x>
                            <y><xsl:value-of select='$y'/></y>
                            </out>
                        </xsl:template>
                    </xsl:stylesheet>"
  )
return (
    transform(
      map {
        "source-node": $in,
        "stylesheet-node": $style,
        "stylesheet-params":
          map {
            QName("", "v"): "2",
            QName("", "w"): "3",
            QName("", "y"): "5",
            QName("", "x"): "4"
          }
      }
    )
  )("output")
