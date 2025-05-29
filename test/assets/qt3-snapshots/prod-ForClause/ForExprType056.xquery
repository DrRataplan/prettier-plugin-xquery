declare namespace fs = "http://www.example.com/filesystem";

for $test as document-node() in (/)
return ($test//fs:Folder)[1]/fs:FolderName
