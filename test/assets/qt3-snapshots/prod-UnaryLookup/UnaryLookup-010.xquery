let $d := current-date()
return (["a", "b", "c"], ["b", "c", "d"], ["e", "f", "b"])[?($d) = "b"]
