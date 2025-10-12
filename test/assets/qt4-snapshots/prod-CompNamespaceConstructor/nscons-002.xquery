declare variable $s := "saxon";

declare variable $xsl := "xsl";

<e>
  {
    namespace { $s } { "http://saxon.sf.net/" },
    attribute a { 23 },
    namespace { $xsl } { "http://www.w3.org/1999/XSL/Transform" }
  }
</e>
