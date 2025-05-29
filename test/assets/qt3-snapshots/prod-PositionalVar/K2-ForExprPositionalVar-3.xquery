let $tree := <e> <a id="1" /> <a id="2" /> <a id="3" /> </e>
for $i in ("a", "b", "c")
return ($tree/a/@id = $pos, $pos)
