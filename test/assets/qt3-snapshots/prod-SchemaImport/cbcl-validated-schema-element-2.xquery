declare construction strip;

import schema namespace tc =  "http://www.w3.org/XQueryTest/testcases";

let $x := <newroot>{
    /
  }</newroot>
return count($x/tc:root/schema-element(tc:schema-element-head))
