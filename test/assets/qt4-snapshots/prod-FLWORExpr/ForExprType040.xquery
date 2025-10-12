import schema default element namespace  "http://www.example.com/typedecl";

for $test as element(UserDefinedSimpleType, Enumeration) in
  /root/UserDefinedSimpleType
return $test
