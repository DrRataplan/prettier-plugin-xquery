import schema namespace ids =  "http://www.w3.org/XQueryTest/ididrefs";

(fn:idref("id1", /ids:IDS[1])) is (fn:idref("id2", /ids:IDS[1]))
