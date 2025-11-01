declare namespace lu = "http://www.w3.org/XQueryTest/unionListDefined";

import schema  "http://www.w3.org/XQueryTest/unionListDefined";

declare function local:f ($arg as lu:union-of-anonymous) as xs:boolean {
  $arg = 1
};

(local:f(1), local:f(2), local:f("Jan"), local:f("Feb"))
