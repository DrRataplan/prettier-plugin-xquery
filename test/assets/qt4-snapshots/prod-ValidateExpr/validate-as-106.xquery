declare namespace other = "http://ns.other.com/";

import schema namespace hat =  "http://www.w3.org/XQueryTest/hats";

declare variable $in := <hat>8</hat>;

declare function local:run () as element(hat, hat:hatsize) {
  validate type hat:hatsize { validate type xs:integer { $in } }
};

local:run()
