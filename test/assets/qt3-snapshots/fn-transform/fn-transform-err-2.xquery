let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='3.0'
                                                                 xmlns:app='http://www.example.com'>
                                                <xsl:template name='app:main' > <xsl:for-each select='section'>
                                                <xsl:result-document href='section{position()}.html'> <!-- instructions content here -->
                                                </xsl:result-document> </xsl:for-each>
                                                </xsl:template> </xsl:stylesheet>",
  $xml :=
  "<doc>
                                                   <section>sect1</section>
                                                   <section>sect2</section>
                                                   </doc>"
return let $result :=
    fn:transform(
      map {
        "stylesheet-text": $xsl,
        "stylesheet-location": $render,
        "source-node": fn:parse-xml($xml)
      }
    )
  return $result?output
