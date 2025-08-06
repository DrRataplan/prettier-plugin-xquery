let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform' version='3.0'>
                                                <xsl:template match='/'> <xsl:for-each select='//section'>
                                                <xsl:result-document href='section{position()}.xml'> <!-- instructions content here -->
                                                <out>
                                                <xsl:value-of select='position()'/>
                                                </out>
                                                </xsl:result-document> </xsl:for-each>
                                                </xsl:template> </xsl:stylesheet>",
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
    "base-output-uri":
      resolve-uri(
        "transform/sandbox/fn-transform-44/output.xml",
        static-base-uri()
      ),
    "delivery-format": "serialized"
  }
)
  => map:remove(
    resolve-uri(
      "transform/sandbox/fn-transform-44/output.xml",
      static-base-uri()
    )
  )
