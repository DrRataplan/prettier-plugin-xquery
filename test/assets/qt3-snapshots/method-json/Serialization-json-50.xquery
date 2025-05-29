declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "json";
declare option output:allow-duplicate-names "no";

map {"a": 1, "2014-10-01": 1, "b": 1, xs:date("2014-10-01"): 1}
