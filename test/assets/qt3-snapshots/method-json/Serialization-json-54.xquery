declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

declare option output:parameter-document "json/json-allow-duplicates.xml";

map {"one": 1, xs:QName("one"): 1}
