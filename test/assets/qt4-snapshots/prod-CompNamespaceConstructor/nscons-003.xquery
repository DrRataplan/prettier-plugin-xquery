declare variable $s := "saxon";

declare variable $xsl := "xsl";

<out>
  <t:e xmlns:t="http://www.example.com/">
    {
      namespace { "" } { "http://saxon.sf.net/" },
      attribute a { 23 },
      namespace { $xsl } { "http://www.w3.org/1999/XSL/Transform" },
      <f />
    }
  </t:e>
</out>
