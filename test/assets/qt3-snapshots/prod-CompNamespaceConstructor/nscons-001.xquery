declare variable $s := "http://saxon.sf.net/";

declare variable $xsl := "http://www.w3.org/1999/XSL/Transform";

<e>{
  namespace saxon {
    $s
  }, attribute a {
    23
  }, namespace xsl {
    $xsl
  }
}</e>
