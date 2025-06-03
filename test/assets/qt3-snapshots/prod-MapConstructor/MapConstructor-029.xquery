declare namespace a = "http://example.com";

<dot><a:b>key</a:b><c>value</c></dot>!map {*:b: c}
  => deep-equal(map {"key": <c>value</c>})
