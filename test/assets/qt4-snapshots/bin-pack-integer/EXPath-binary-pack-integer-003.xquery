for $b in bin:pack-integer(34567, 3, "least-significant-first")
return $b eq bin:pack-integer(34567, 3, "little-endian") and
    $b eq bin:pack-integer(34567, 3, "LE")
