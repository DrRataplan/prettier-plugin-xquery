import schema namespace p =  "http://www.w3.org/XQueryTest/perversity";

let $v := validate strict { <p:elementOnly><p:e /></p:elementOnly> }
let $w := validate strict { <p:mixed><p:e /></p:mixed> }
let $x := validate strict { <p:empty><p:e /></p:empty> }
let $y := validate strict { <p:simple><p:e /></p:simple> }
return deep-equal($v/p:e, $w/p:e) or
  deep-equal($w/p:e, $x/p:e) or
  deep-equal($v/p:e, $x/p:e) or
  deep-equal($x/p:e, $y/p:e)
