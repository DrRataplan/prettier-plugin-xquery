try {
  fn:error(fn:QName("http://www.example.com/", "example:EXER3141"))
} catch *:EXER3141 {
  0
}
