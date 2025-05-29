import schema default element namespace  "http://www.example.com/typedecl";

for $test as element(ListType, xs:string) in /root/ListType
return $test
