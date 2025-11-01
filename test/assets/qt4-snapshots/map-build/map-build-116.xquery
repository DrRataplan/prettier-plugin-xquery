let $m := map:build(tokenize("The cat sat on the mat"), characters#1)
return $m("a")
