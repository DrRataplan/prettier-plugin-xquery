try {
  fn:error(
    fn:QName("http://www.example.com/", "example:EXER3141"),
    "Description"
  )
} catch Q{http://www.example.com/}EXER3141 { local-name-from-QName($err:code) }
