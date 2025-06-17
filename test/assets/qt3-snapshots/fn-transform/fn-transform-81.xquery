let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            version='1.0'> 
            <xsl:template match='/'>
              <xsl:sequence select='42'/>
            </xsl:template> 
        </xsl:stylesheet>"
return let $expected := parse-xml("<b>89</b>")/*
  return let $trans-result :=
      transform(
        map {
          "stylesheet-text": $xsl,
          "delivery-format": "raw",
          "serialization-params":
            map {
              "method": "xml",
              "omit-xml-declaration": true(),
              "indent": false()
            },
          "source-node": parse-xml("<a><b>89</b></a>"),
          "post-process": function ($uri, $out) { $out + 3 }
        }
      )
    return deep-equal(trace($trans-result("output"), "actual"), 45)
