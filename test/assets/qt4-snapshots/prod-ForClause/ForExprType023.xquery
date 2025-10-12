declare default element namespace "http://www.example.com/typedecl";

for $test as attribute(integer) in (/root/InterleaveType2/@integer)
return data($test)
