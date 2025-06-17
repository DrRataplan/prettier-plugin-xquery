declare variable $d1 := document { <?target data?>, text { "some text" } };

declare variable $d2 := document { text { "some text" } };

deep-equal($d1, $d2)
