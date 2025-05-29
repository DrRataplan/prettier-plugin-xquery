declare namespace fs = "http://www.example.com/filesystem";

for $test as item() in data((//fs:Folder)[1]/fs:File/fs:FileName)
return $test
