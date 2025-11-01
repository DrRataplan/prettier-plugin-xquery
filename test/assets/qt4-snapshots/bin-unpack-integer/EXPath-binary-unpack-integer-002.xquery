for $b in bin:unpack-integer($int.short.B, 0, 2, "most-significant-first")
return $b eq bin:unpack-integer($int.short.B, 0, 2, "big-endian") and
    $b eq bin:unpack-integer($int.short.B, 0, 2, "BE")
