declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "json";
declare option output:allow-duplicate-names "no";

map {"1": map {"1": map {"1": 1}, 1: 1}}
