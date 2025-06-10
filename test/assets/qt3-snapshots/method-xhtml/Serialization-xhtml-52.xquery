declare boundary-space strip;

declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xhtml";
declare option output:indent "no";
declare option output:html-version "5.0";

<h:html
  xmlns:h="http://www.w3.org/1999/xhtml"
  >
  <h:body><h:h1>Pythagoras</h:h1><h:p><m:math
      xmlns:m="http://www.w3.org/1998/Math/MathML"
      > <m:mrow> <m:msup><m:mi> a </m:mi><m:mn>2</m:mn></m:msup> <m:mo> + </m:mo> <m:msup><m:mi> b </m:mi><m:mn>2</m:mn></m:msup> <m:mo> = </m:mo> <m:msup><m:mi> c </m:mi><m:mn>2</m:mn></m:msup> </m:mrow> </m:math></h:p></h:body>
</h:html>
