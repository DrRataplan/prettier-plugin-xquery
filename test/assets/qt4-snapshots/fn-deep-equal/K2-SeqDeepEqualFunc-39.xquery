import schema namespace p =  "http://www.w3.org/XQueryTest/perversity";

let $w := validate strict { <p:mixed><p:e>fraternity</p:e></p:mixed> }
let $y := validate strict { <p:simple><p:e>fraternity</p:e></p:simple> }
return deep-equal($w/p:e, $y/p:e)
