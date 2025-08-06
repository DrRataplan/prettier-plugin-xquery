let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='3.0'>
                                    <xsl:template match='/'>
                                       <xsl:for-each select='//section'>
                                           <xsl:result-document href='section{position()}.html'> 
                                              <!-- instructions content here -->
                                            </xsl:result-document> 
                                       </xsl:for-each>
                                    </xsl:template> 
                                 </xsl:stylesheet>",
  $xml :=
  "<doc>
                                   <section>sect1</section>
                                   <section>sect2</section>
                                   <section>sect3</section>
                               </doc>"
return fn:transform(
  map {
    "stylesheet-text": $xsl,
    "source-node": parse-xml($xml),
    "base-output-uri": "http://www.w3.org/fots/fn/transform/output-doc.xml"
  }
)
  => map:remove("http://www.w3.org/fots/fn/transform/output-doc.xml")
