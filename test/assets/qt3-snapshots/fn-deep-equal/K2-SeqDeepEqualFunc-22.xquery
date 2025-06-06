declare variable $d1 := <e a="1" b="2">te<!-- content -->xt</e>;

declare variable $d2 := <e a="1" b="2">text</e>;

deep-equal($d1, $d2), deep-equal($d2, $d1)
