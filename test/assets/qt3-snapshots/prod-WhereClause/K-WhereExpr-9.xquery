for $i in (1, 2, current-time())[1]
where fn:boolean($i treat as xs:integer)
return true()
