let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            xmlns:xs='http://www.w3.org/2001/XMLSchema'
            xmlns:saxon='http://saxon.sf.net/'
            xmlns:my='http://www.w3.org/fots/fn/transform/myfunctions' version='2.0'> 
            <xsl:template name='main'>
              <out><xsl:value-of select=""saxon:in-summer-time(xs:dateTime('2016-07-01T00:00:00'), 'Europe/London')""/></out>
            </xsl:template>  
        </xsl:stylesheet>"
return transform(
  map {
    "stylesheet-text": $xsl,
    "initial-template": fn:QName("", "main"),
    "delivery-format": "serialized",
    "requested-properties":
      map {
        fn:QName("http://www.w3.org/1999/XSL/Transform", "vendor"): "Saxonica"
      }
  }
)
