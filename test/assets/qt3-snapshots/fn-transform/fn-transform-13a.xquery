let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='3.0'>
                                    <xsl:template match='/'> 
                                       <xsl:for-each select='//section'>
                                         <xsl:result-document href='section{position()}.html'> <!-- instructions content here -->
                                           <html>
                                             <head>
                                                 <title>Section <xsl:value-of select='position()'/></title>
                                             </head>
                                             <body>
                                                 <h1>Header for section <xsl:value-of select='position()'/></h1>
                                                 <p>The content of <xsl:value-of select='.'/>.</p>
                                                 <xsl:if test='position() ne last()'>
                                                     <p><a href='section{position()+1}.html'>Next section</a></p>
                                                 </xsl:if>
                                                 <xsl:if test='position() eq last()'>
                                                     <p><a href='section1.html'>First section</a></p>
                                                 </xsl:if>
                                             </body>
                                         </html>
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
