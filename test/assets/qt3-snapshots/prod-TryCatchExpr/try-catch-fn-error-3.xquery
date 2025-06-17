try {
  fn:error(fn:QName("http://www.example.com/", "example:EXER3141"))
} catch Q{http://www.example.com/}EXER3141 { 0 }
