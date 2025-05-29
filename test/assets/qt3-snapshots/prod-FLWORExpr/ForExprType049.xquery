import schema default element namespace  "http://www.example.com/typedecl";

for $test as xs:decimal in data(/root/InterleaveType/*)
return $test
