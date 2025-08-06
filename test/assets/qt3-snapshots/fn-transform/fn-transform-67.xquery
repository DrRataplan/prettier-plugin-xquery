let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            xmlns:xs='http://www.w3.org/2001/XMLSchema'
            xmlns:my='http://www.w3.org/fots/fn/transform/myfunctions' version='2.0'>
            <xsl:output use-character-maps='map-one'/>
            <xsl:character-map name='map-one'>
              <xsl:output-character character='-' string='(hyphen)'/>
              <xsl:output-character character='*' string='(asterisk)'/>
            </xsl:character-map>  
            <xsl:template name='main'>
              <out>a-b*c</out>
            </xsl:template>  
        </xsl:stylesheet>"
return transform(
  map {
    "stylesheet-text": $xsl,
    "initial-template": fn:QName("", "main"),
    "delivery-format": "serialized",
    "serialization-params": map {"use-character-maps": map {"*": "(star)"}}
  }
)
