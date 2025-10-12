import schema namespace s =  "http://www.w3.org/XQueryTest/substitution11";

declare variable $in := validate strict {
  <cuckoo xmlns="http://www.w3.org/XQueryTest/substitution11"><B /></cuckoo>
  };

$in/s:B instance of schema-element(s:H1)
