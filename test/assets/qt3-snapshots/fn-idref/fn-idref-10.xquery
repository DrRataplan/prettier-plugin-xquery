import schema namespace ids =  "http://www.w3.org/XQueryTest/ididrefs";

fn:count(fn:idref("nomatching1 nomatching2", /ids:IDS[1]))
