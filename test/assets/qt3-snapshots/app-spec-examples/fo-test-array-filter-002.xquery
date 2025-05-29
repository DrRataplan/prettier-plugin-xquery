array:filter(["the cat", "sat", "on the mat"], function ($s) {
    fn:count(fn:tokenize($s)) gt 1
  })
