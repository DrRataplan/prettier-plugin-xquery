let $xsl :=
"<xsl:stylesheet xmlns:xsl='http://www.w3.org/1999/XSL/Transform'
            xmlns:xs='http://www.w3.org/2001/XMLSchema'
            xmlns:chrono='http://chronology.com/' version='2.0'>
            <xsl:import-schema>
              <xs:schema targetNamespace='http://chronology.com/'>
                <xs:simpleType name='c4'>
                  <xs:restriction base='xs:string'>
                    <xs:pattern value='....'/>
                  </xs:restriction>  
                </xs:simpleType>
              </xs:schema>
            </xsl:import-schema>
            <xsl:template name='main'>
              <out><xsl:value-of select=""chrono:c4('abcd')""/></out>
            </xsl:template>  
        </xsl:stylesheet>"
return transform(
  map {
    "stylesheet-text": $xsl,
    "initial-template": fn:QName("", "main"),
    "delivery-format": "serialized",
    "requested-properties":
      map {
        fn:QName("http://www.w3.org/1999/XSL/Transform", "is-schema-aware"):
          true()
      }
  }
)
