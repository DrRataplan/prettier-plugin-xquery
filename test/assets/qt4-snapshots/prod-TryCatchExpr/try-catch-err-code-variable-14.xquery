for $p in ("p1", "p2")
return try { parse-xml($p) } catch * { $err:code }
