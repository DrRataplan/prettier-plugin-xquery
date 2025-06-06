declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "xml";
declare option output:cdata-section-elements "b Q{http://www.example.org/ns/p}b";
declare option output:suppress-indentation "para";

<chapter>
  <section xmlns:p="http://www.example.org/ns/p">
    <para><b>bold</b><i>italic</i><p:b>BOLD</p:b><p:i>ITALIC</p:i></para>
  </section>
</chapter>
