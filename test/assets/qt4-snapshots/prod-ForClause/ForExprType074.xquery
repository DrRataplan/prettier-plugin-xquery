declare namespace fs = "http://www.example.com/filesystem";

for $test as element(*)? allowing empty in //nonexistent
return count($test)
