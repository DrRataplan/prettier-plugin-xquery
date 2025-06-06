import schema namespace s =  "http://www.w3.org/XQueryTest/substitution";

declare variable $in := validate strict {
  <H
    xmlns="http://www.w3.org/XQueryTest/substitution"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:nil="true" />
  };

$in instance of schema-element(s:H)
