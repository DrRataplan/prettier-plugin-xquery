declare namespace fs = "http://www.example.com/filesystem";

for $test as processing-instruction("unknown") in
  (//fs:Folder)[1]//processing-instruction()
return $test
