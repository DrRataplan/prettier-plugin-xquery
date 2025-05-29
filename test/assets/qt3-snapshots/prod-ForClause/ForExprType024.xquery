declare default element namespace "http://www.example.com/typedecl";

for $test as attribute(att, xs:anySimpleType) in /root/anyAtomicType/@att
return data($test)
