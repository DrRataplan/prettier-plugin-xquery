let $in :=
  xs:string(
    "<books>
    <book>
        <title>XSLT Programmer?s Reference</title>
        <author>Michael H. Kay</author>
    </book>
    <book>
        <title>XSLT</title>
        <author>Doug Tidwell</author>
        <author>Simon St. Laurent</author>
        <author>Robert Romano</author>
    </book>
</books>"
  ),
  $style :=
  xs:string(
    '<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <div>
                    <xsl:for-each select="books/book">
                        <b><xsl:value-of select="title"/></b>: <xsl:value-of select="author"
                        /><br/>
                    </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>'
  )
return transform(
    map {
      "source-node": fn:parse-xml($in),
      "stylesheet-text": $style,
      "delivery-format": "serialized",
      "serialization-params": map {"method": "html"}
    }
  )("output")
