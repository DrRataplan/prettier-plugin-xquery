let $xsl :=
  "<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            xmlns:xs='http://www.w3.org/2001/XMLSchema'
            xmlns:my='http://www.w3.org/fots/fn/transform/myfunctions' version='2.0'>
            <xsl:output cdata-section-elements='b my:b'/>
            <xsl:template name='main'>
              <my:a>
                <my:b>green</my:b>
                <my:c>blue</my:c>
                <b>red</b>
                <c>pink</c>
                <d>black</d>
              </my:a>
            </xsl:template>  
        </xsl:stylesheet>"
return transform(
    map {
      "stylesheet-text": $xsl,
      "initial-template": fn:QName("", "main"),
      "delivery-format": "serialized",
      "serialization-params":
        map {
          "cdata-section-elements":
            (
              QName("http://www.w3.org/fots/fn/transform/myfunctions", "c"),
              QName("", "c")
            )
        }
    }
  )
