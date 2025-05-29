let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            version='1.0'> 
            <xsl:template match='/'>
              <out><xsl:copy-of select='.'/></out>
            </xsl:template> 
        </xsl:stylesheet>"
return let $expected := parse-xml("<b>89</b>")/*
  return let $trans-result :=
      transform(
        map {
          "stylesheet-text": $xsl,
          "delivery-format": "document",
          "source-node": parse-xml("<a><b>89</b></a>"),
          "post-process": function ($uri, $doc) {
              $doc/out/a/b
            }
        }
      )
    return deep-equal(trace($trans-result("output"), "actual"), $expected)
