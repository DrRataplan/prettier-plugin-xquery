declare base-uri "http://www.example.org/wrong/";

import module namespace lib = "http://www.xqsharp.com/test/baseuri-lib";

base-uri($lib:node/node())
