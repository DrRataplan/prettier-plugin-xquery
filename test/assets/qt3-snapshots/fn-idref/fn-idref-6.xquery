import schema namespace ids =  "http://www.w3.org/XQueryTest/ididrefs";

fn:count(fn:idref("nomatchingid", /ids:IDS[1]))
