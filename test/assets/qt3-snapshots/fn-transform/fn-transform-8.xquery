transform(
  map {
    "stylesheet-node":
      fn:parse-xml(
        "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='2.0'>
                <xsl:template match='/'>
                    <out>
                        <xsl:value-of select='.' />
                    </out>
                </xsl:template>
            </xsl:stylesheet>"
      ),
    "source-node": parse-xml("<doc>this</doc>")
  }
)
