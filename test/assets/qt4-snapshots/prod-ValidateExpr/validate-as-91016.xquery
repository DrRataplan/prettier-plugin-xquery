import schema namespace hat =  "http://www.w3.org/XQueryTest/hats"(: at "qischema001.xsd" :) ;

validate type hat:hatsize { <hat>banana</hat> }
