declare namespace map = "http://www.w3.org/2005/xpath-functions/map";

declare variable $book := (
  <book>
<isbn>0470192747</isbn>
<publisher>Wiley</publisher>
<title>XSLT 2.0 and XPath 2.0 Programmer's Reference</title>
</book>
);

declare variable $author := (
  <author>
<name>Michael H. Kay</name>
<isbn>0470192747</isbn>
<isbn>...</isbn>
</author>
);

declare variable $index := map:merge($book!map {isbn: .});

<table>{
  for $a in $author
  return <tr>
    <td>{
        $a/name/string()
      }</td>
    <td>{
        string-join($a/isbn!$index(.)/title/string(), ", ")
      }</td>
  </tr>
}</table>
