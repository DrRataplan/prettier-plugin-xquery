declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
declare namespace p = "http://www.example.org/ns/p";

declare option output:method "xml";
declare option output:cdata-section-elements "b p:b";
declare option output:suppress-indentation "para";

<chapter>
  <section>
    <para><b>bold</b><i>italic</i><p:b>BOLD</p:b><p:i>ITALIC</p:i></para>
  </section>
</chapter>
