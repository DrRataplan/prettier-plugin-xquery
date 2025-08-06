let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='3.0'>
                <xsl:template name='main'>
                <xsl:param name='param1' select='&quot;old1&quot;'/>
                <xsl:param name='param2' select='&quot;old1&quot;'/>
                <xsl:param name='param3' required='yes'/>
                    <out>
                        <xsl:value-of select='$param1' />
                        <xsl:value-of select='$param2' />
                        <xsl:value-of select='$param3' />
                    </out>
                </xsl:template>
            </xsl:stylesheet>"
return transform(
  map {
    "stylesheet-text": $xsl,
    "source-node": parse-xml("<doc>this</doc>"),
    "initial-template": fn:QName("", "main"),
    "template-params":
      map {QName("", "param1"): "new1", QName("", "param2"): "new2"}
  }
)
