let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='3.0'>
                <xsl:template name='main'>
                <xsl:param name='template-param' select='&quot;old&quot;'/>
                    <out>
                        <xsl:value-of select='$template-param' />
                    </out>
                </xsl:template>
            </xsl:stylesheet>"
return transform(
  map {
    "stylesheet-text": $xsl,
    "source-node": parse-xml("<doc>this</doc>"),
    "initial-template": fn:QName("", "main"),
    "template-params": map {QName("", "template-param"): "new"}
  }
)
