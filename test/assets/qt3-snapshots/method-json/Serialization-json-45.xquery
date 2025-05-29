declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "json";
declare option output:allow-duplicate-names "yes";

map {"one": 1, xs:QName("one"): 1}
