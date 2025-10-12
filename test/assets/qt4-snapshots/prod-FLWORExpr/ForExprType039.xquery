import schema default element namespace  "http://www.example.com/typedecl";

for $test as element(*, InterleaveType) in /root/InterleaveType
return $test
