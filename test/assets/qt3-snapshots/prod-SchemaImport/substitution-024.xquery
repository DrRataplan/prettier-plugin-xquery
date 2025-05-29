import schema namespace s =  "http://www.w3.org/XQueryTest/substitution11";

declare variable $in := validate strict {
  <cuckoo xmlns="http://www.w3.org/XQueryTest/substitution11">
                <C xsi:nil="true" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/>
              </cuckoo>
  };

$in/s:C instance of schema-element(s:H1)
