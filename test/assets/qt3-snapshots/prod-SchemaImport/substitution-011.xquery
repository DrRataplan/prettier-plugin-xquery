import schema namespace s =  "http://www.w3.org/XQueryTest/substitution";

declare variable $in := validate strict {
  <cuckoo
    xmlns="http://www.w3.org/XQueryTest/substitution"
    >
                <E />
              </cuckoo>
  };

$in/s:E instance of schema-element(s:D)
