declare default element namespace "http://example.com/";

for $test as attribute(integer, xs:anyAtomicType) in (<e integer="1"/>/@integer)
return data($test)
