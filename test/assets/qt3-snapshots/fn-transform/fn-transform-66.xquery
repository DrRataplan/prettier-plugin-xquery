let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            xmlns:xs='http://www.w3.org/2001/XMLSchema'
            xmlns:my='http://www.w3.org/fots/fn/transform/myfunctions' version='3.0'>
            <xsl:output indent='yes' suppress-indentation='b my:b'/>
            <xsl:template name='main'>
              <my:a>
                <my:b><t>green</t></my:b>
                <my:c><t>blue</t></my:c>
                <b><t>red</t></b>
                <c><t>pink</t></c>
                <d><t>black</t></d>
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
          "suppress-indentation":
            (
              QName("http://www.w3.org/fots/fn/transform/myfunctions", "c"),
              QName("", "c")
            )
        }
    }
  )
