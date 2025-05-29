declare variable $s := "http://saxon.sf.net/";

declare variable $xsl := "http://www.w3.org/1999/XSL/Transform";

declare variable $xmlns := "xml";

<e> {
    namespace saxon {
      $s
    }, attribute a {
      23
    }, namespace xsl {
      $xsl
    }, namespace {
      $xmlns
    } {
      $s
    }, element f {
      42
    }
  }</e>
