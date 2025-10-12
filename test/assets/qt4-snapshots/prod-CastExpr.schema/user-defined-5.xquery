import schema namespace myType =  "http://www.w3.org/XQueryTest/userDefinedTypes";

fn:concat(
  myType:stringBased("valid value 4"),
  myType:stringBased("valid value 1")
)
