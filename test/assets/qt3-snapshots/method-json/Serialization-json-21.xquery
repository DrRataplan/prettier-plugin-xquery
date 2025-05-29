declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "json";

map {"a": xs:gYearMonth("1995-05")}
