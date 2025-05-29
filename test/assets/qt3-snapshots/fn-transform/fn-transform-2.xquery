let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='2.0'
                                                                 xmlns:app='http://www.example.com'>
                                    <xsl:template name='app:main'> 
                                       <xsl:for-each select='//section'>
                                          <xsl:result-document href='section{position()}.html'>
                                             <xsl:value-of select='.' />
                                          </xsl:result-document>
                                       </xsl:for-each>
                                    </xsl:template> 
                                 </xsl:stylesheet>",
  $xml :=
  "<doc>
                                   <section>sect1</section>
                                   <section>sect2</section>
                                 </doc>"
return element {xs:QName("html")} {
    element {xs:QName("body")} {
      for $x in
        fn:transform(
          map {
            "xslt-version": 2.0,
            "stylesheet-text": $xsl,
            "base-output-uri":
              "http://www.w3.org/fots/fn/transform/output-doc.xml",
            "initial-template": fn:QName("http://www.example.com", "main"),
            "source-node": fn:parse-xml($xml)
          }
        )?*
      return $x
    }
  }
