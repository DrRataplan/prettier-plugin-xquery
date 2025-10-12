declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "adaptive";

map {"2015": 1, 2015: 2, xs:gYear("2015"): 3}
