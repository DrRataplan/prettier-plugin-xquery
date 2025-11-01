for $b in bin:pack-integer(34567, 3, "most-significant-first")
return $b eq bin:pack-integer(34567, 3, "big-endian") and
    $b eq bin:pack-integer(34567, 3, "BE")
