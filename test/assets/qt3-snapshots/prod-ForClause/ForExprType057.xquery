declare namespace fs = "http://www.example.com/filesystem";

document {
  for $test as text() in (//fs:Folder)[1]/fs:File/fs:FileName/text()
  return $test
}
