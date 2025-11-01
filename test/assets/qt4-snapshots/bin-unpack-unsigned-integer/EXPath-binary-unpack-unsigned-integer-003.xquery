for $b in
  bin:unpack-unsigned-integer($int.short.B, 0, 2, "least-significant-first")
return $b eq
    bin:unpack-unsigned-integer($int.short.B, 0, 2, "little-endian") and
    $b eq bin:unpack-unsigned-integer($int.short.B, 0, 2, "LE")
