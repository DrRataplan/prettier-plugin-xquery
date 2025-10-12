declare namespace fs = "http://www.example.com/filesystem";

document {
  for $test as comment() in (//fs:Folder)[1]/comment()
  return $test
}
