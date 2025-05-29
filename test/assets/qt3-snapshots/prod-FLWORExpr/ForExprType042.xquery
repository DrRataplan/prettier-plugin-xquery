import schema default element namespace  "http://www.example.com/typedecl";

for $test as element(*, xs:decimal) in /root/InterleaveType/*
return $test
