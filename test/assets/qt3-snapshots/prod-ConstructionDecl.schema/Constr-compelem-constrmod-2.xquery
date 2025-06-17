declare construction preserve;

import schema namespace atomic =  "http://www.w3.org/XQueryTest";

fn:count(fn:data((element elem { //*:idrefs })/*))
