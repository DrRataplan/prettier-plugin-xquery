declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";
declare namespace p = "http://www.example.org/ns/p";

declare option output:method " Q{}xml&#x9;";
declare option Q{http://www.w3.org/2010/xslt-xquery-serialization}indent "yes
        ";
declare option output:suppress-indentation " p   p:para ";

<chapter>
  <section>
    <p:para><b>bold</b><i>italic</i></p:para>
    <p><b><BOLD /></b><i>ITALIC</i></p>
  </section>
</chapter>
