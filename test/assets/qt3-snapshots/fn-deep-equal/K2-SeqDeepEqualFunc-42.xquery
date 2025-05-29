import schema namespace p =  "http://www.w3.org/XQueryTest/perversity";

let $w := validate strict { <p:list><p:e /></p:list> }
let $y := validate strict { <p:union><p:e /></p:union> }
return deep-equal($w/p:e, $y/p:e)
