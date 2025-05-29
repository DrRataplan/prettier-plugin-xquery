import schema default element namespace  "http://www.example.com/typedecl";

for $test as attribute(*, xs:decimal) in
  (/root/InterleaveType2/@integer, /root/InterleaveType2/@decimal)
return data($test)
