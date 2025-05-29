for $p in //section[section.title = "Procedure"]
where not(some $a in $p//anesthesia satisfies $a << ($p//incision)[1])
return $p
