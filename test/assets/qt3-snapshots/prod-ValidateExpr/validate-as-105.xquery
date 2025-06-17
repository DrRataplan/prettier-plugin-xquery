declare namespace other = "http://ns.other.com/";

import schema namespace hat =  "http://www.w3.org/XQueryTest/hats"(: at "qischema001.xsd" :) ;

declare variable $in := <hat>8</hat>;

declare function local:run () as element(hat, hat:hatsize) {
  (#other:validate (hat:hatsize)#){validate type hat:hatsize { $in }}
};

local:run()
