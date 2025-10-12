import schema default element namespace  "http://www.example.com/typedecl";

for $test as xs:anyAtomicType in data(/root/anyAtomicType/@att)
return $test
