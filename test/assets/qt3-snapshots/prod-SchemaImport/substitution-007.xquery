import schema namespace s =  "http://www.w3.org/XQueryTest/substitution";

declare variable $in := validate strict {
  <cuckoo xmlns="http://www.w3.org/XQueryTest/substitution"><D /></cuckoo>
  };

$in/s:D instance of schema-element(s:H)
