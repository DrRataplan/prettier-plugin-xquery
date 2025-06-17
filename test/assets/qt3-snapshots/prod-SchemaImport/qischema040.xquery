import schema namespace hat =  "http://www.w3.org/XQueryTest/hats";
import module "http://www.w3.org/XQueryTest/hats"(: at "xmod040a.xq" :) ;

<a>{ hat:purchase(5 cast as hat:hatsize) }</a>
