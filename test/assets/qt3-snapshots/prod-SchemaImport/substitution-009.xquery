import schema namespace s =  "http://www.w3.org/XQueryTest/substitution";

declare variable $in := validate strict {
  <cuckoo xmlns="http://www.w3.org/XQueryTest/substitution">
                <F><string>s</string><decimal>12.7</decimal></F>
              </cuckoo>
  };

$in/s:F instance of schema-element(s:H)
