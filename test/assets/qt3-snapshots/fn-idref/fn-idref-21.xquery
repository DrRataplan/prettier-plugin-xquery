import schema namespace ids =  "http://www.w3.org/XQueryTest/ididrefs";

fn:idref(fn:string-join(("id", "1"), ""), /ids:IDS[1])
