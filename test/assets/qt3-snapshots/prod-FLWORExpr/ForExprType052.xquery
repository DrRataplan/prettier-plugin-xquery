import schema default element namespace  "http://www.example.com/typedecl";

for $test as Enumeration in exactly-one(data(/root/UserDefinedSimpleType))
return $test
