let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='3.0'
                                                                 xmlns:app='http://www.example.com'>
                                                <xsl:template name='app:main' > <xsl:for-each select='section'>
                                                <xsl:result-document href='section{position()}.html'> <!-- instructions content here -->
                                                </xsl:result-document> </xsl:for-each>
                                                </xsl:template> </xsl:stylesheet>"
return let $result :=
    fn:transform(
      map {
        "stylesheet-text": $xsl,
        "stylesheet-node": fn:doc($render),
        "source-node": fn:doc($uri)
      }
    )
  return $result?output
