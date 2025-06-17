declare variable $s := "http://saxon.sf.net/";

declare variable $xsl := "http://www.w3.org/1999/XSL/Transform";

element {QName("http://saxon.sf.net/", "saxon:extension")} {
  namespace saxon { $s },
  attribute a { 23 },
  namespace xsl { $xsl },
  element f { 42 }
}
