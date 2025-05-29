declare namespace a = "http://example.com";

<dot>
          <a:b>key</a:b>
        </dot>!map {a:b: *}
  => deep-equal(map {"key": <a:b xmlns:a="http://example.com">key</a:b>})
