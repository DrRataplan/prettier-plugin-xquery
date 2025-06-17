let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            version='1.0'> 
            <xsl:template match='/'>
              <xsl:variable name='in' select='.'/>
              <xsl:for-each select='1 to 3'>
                <xsl:result-document href='output{.}' omit-xml-declaration='yes'>
                   <out><xsl:value-of select='number($in/a/b) + .'/></out>
                </xsl:result-document>
              </xsl:for-each>             
            </xsl:template> 
        </xsl:stylesheet>"
return transform(
    map {
      "stylesheet-text": $xsl,
      "delivery-format": "serialized",
      "base-output-uri": "http://example.com/",
      "source-node": parse-xml("<a><b>89</b></a>"),
      "post-process": function ($uri, $doc) { replace($doc, "out>", "output>") }
    }
  )
