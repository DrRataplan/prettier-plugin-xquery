declare namespace fs = "http://www.example.com/filesystem";

for $test as node() in (//fs:Folder)[1]/fs:File
return $test/fs:FileName
