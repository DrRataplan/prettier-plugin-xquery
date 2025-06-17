try {
  fn:error(
    fn:QName("http://www.example.com/", "example:EXER3141"),
    "Description",
    (1, 2)
  )
} catch Q{http://www.example.com/}EXER3141 { $err:value[2] }
