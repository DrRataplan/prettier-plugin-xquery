import module namespace schemalib = "http://www.xqsharp.com/test/schemalib/";
import schema namespace cd =  "http://www.cbcl.co.uk/XQueryTest/complexData";

count(schemalib:getShortStrings(validate { / }))
