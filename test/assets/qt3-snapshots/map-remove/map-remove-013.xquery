deep-equal(map:remove(map {"a": 1, "b": (2, 3)}, "a"), map:entry("b", (2, 3)))
