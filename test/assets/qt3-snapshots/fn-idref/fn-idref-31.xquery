import schema namespace ids =  "http://www.w3.org/XQueryTest/ididrefs";

<out
  xmlns="http://www.w3.org/XQueryTest/ididrefs"
  xmlns:i="http://www.w3.org/XQueryTest/ididrefs"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
>
  {
    for $z in
      (//i:IDREFS-content, //i:IDREF-List-content, //i:W/@i:Restricted-IDREF)
    for $s in distinct-values(tokenize(normalize-space(string($z)), "\s"))
    order by $s
    return <e val="{
          $s
        }">{
          idref($s, (/))[self::attribute()], idref($s, (/))[self::element()]
        }</e>
  }
</out>
