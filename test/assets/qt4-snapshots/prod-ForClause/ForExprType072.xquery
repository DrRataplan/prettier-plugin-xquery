declare namespace fs = "http://www.example.com/filesystem";

for $test as document-node() in (//fs:Folder)[1]/fs:File/fs:FileName
return $test
