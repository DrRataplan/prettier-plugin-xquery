import schema namespace s =  "http://www.w3.org/XQueryTest/substitution";

declare variable $in := validate strict {
  <cuckoo xmlns="http://www.w3.org/XQueryTest/substitution"><A /></cuckoo>
  };

$in/s:A instance of schema-element(s:H)
