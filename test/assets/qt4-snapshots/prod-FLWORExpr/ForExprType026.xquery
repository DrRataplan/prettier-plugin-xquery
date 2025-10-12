import schema default element namespace  "http://www.example.com/typedecl";

for $test as attribute(att, Enumeration) in
  /root/UserDefinedSimpleTypeAttribute/@att
return data($test)
