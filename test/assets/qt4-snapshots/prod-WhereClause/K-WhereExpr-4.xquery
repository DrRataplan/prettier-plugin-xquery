for $i in 1
where count(($i, 2, timezone-from-time(current-time())))
return true()
