let $xsl :=
"<xsl:stylesheet version='2.0' xmlns:xsl='http://www.w3.org/1999/XSL/Transform'>
                    <xsl:include href='transform/staticbaseuri.xsl'/>
                    </xsl:stylesheet>"
return fn:transform(
  map {"stylesheet-text": $xsl, "initial-template": QName("", "main")}
)?output
