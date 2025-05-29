import schema namespace s =  "http://www.w3.org/XQueryTest/substitution";

declare variable $in := validate strict {
  <H xmlns="http://www.w3.org/XQueryTest/substitution">
                  <string>s</string>
                  <decimal>93.7</decimal>
                </H>
  };

$in instance of schema-element(s:H)
