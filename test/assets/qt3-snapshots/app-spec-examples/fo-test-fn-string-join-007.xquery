let $doc := <doc>
  <chap>
    <section xml:id="xyz" />
  </chap>
</doc>
return $doc//section!fn:string-join(ancestor-or-self::*/name(), "/")
