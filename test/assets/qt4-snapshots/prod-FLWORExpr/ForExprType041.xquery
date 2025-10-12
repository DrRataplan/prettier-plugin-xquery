import schema default element namespace  "http://www.example.com/typedecl";

for $test as element(*, Enumeration) in /root/UserDefinedSimpleType
return $test
