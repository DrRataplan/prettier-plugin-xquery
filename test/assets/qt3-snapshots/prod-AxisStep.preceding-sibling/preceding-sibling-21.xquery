let $var := <anElement>Some Content</anElement>
return fn:count($var/preceding-sibling::*)
