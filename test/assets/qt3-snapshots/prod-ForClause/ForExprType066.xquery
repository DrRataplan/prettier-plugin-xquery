declare namespace fs = "http://www.example.com/filesystem";

for $test as comment() in (//fs:Folder)[1]/fs:File/fs:FileName
return $test
