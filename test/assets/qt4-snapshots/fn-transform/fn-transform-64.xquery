let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
              xmlns:xs='http://www.w3.org/2001/XMLSchema'
              xmlns:my='http://www.w3.org/fots/fn/transform/myfunctions' version='3.0'>
                <xsl:function name='my:user-function' as='xs:integer*' visibility='public'>
                    <xsl:param name='param1'/>
                    <xsl:param name='param2'/>
                    <xsl:sequence select='$param1 to $param2'/>
                </xsl:function>
            </xsl:stylesheet>"
return transform(
    map {
      "stylesheet-text": $xsl,
      "initial-function":
        fn:QName(
          "http://www.w3.org/fots/fn/transform/myfunctions",
          "user-function"
        ),
      "function-params": [1, 5],
      "delivery-format": "raw"
    }
  )
