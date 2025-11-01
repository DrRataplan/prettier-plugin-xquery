map:merge(map:entries(map {"a": 1, "b": 2})!map {map:items(.): map:keys(.)})
