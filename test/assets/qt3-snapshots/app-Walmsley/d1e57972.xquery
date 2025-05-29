declare variable $map1 := map {1: "first", 2: "second"};

deep-equal(map:merge(map:for-each($map1, function ($k, $v) {
        map:entry($k + 1, $v)
      })), map {2: "first", 3: "second"})
