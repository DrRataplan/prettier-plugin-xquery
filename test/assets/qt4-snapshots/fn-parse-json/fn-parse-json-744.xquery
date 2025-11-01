'["a", null, "b"]'
  => parse-json(map {"null": fn:void#1})
  => deep-equal(["a", fn:void#1, "b"])
