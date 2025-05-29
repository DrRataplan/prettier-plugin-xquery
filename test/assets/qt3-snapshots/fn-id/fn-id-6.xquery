import schema namespace ids =  "http://www.w3.org/XQueryTest/ididrefs";

fn:count(fn:id("nomatchingid", /ids:IDS[1]))
