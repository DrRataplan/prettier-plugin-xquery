import schema namespace hat =  "http://www.w3.org/XQueryTest/hats"(:  at "qischema001.xsd" :) ;

declare function local:run () as element(hat:hat, hat:hatsize) {
  validate type hat:hatsize { <hat:hat>8</hat:hat> }
};

local:run()
