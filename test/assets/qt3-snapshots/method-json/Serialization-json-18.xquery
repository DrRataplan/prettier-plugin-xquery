declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:method "json";

map {"a": xs:decimal(12678967.543233) cast as xs:float}
