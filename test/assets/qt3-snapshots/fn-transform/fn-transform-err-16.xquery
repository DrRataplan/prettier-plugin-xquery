let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            xmlns:my='http://www.w3.org/fots/fn/transform/myfunctions' version='3.0'>
                <xsl:function name='my:user-function'>
                    <xsl:param name='param1'/>
                    <xsl:param name='param2'/>
                    <this>
                    <xsl:value-of select='$param1'/><xsl:value-of select='$param2'/>
                    </this>
                </xsl:function>
                <xsl:template name='main'>
                    <out>
                        <xsl:value-of select='.' />
                    </out>
                </xsl:template>
            </xsl:stylesheet>"
return transform(
  map {
    "stylesheet-text": $xsl,
    "source-node": parse-xml("<doc>this</doc>"),
    "initial-function":
      fn:QName(
        "http://www.w3.org/fots/fn/transform/myfunctions",
        "user-function"
      )
  }
)
