import schema default element namespace  "http://www.example.com/typedecl";

for $test as attribute(*, Enumeration) in
  /root/UserDefinedSimpleTypeAttribute/@att
return data($test)
