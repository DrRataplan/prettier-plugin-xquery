'["a", null, "b"]'
  => parse-json(map {"null": 1 to 10})
  => deep-equal(["a", 1 to 10, "b"])
