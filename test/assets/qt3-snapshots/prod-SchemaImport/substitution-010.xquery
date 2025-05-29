import schema namespace s =  "http://www.w3.org/XQueryTest/substitution";

declare variable $in := validate strict {
  <cuckoo xmlns="http://www.w3.org/XQueryTest/substitution">
                <G><string>s</string><decimal>12.7</decimal><date>2012-10-10</date></G>
              </cuckoo>
  };

$in/s:G instance of schema-element(s:H)
