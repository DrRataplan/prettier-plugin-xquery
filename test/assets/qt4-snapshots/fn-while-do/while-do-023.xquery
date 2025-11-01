for $pred in (false#0, op("="))
for $action in (identity#1, op("+"))
return while-do(1, $pred, $action)
