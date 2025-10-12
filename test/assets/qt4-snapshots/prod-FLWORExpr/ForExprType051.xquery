import schema default element namespace  "http://www.example.com/typedecl";

for $test as xs:string in exactly-one(data(/root/ListType))
return $test
