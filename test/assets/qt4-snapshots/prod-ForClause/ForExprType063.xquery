declare namespace fs = "http://www.example.com/filesystem";

for $test as node() in data((//fs:Folder)[1]/fs:File/fs:FileName)
return $test
