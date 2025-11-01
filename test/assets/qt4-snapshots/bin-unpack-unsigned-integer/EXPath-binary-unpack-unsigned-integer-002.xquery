for $b in
  bin:unpack-unsigned-integer($int.short.B, 0, 2, "most-significant-first")
return $b eq bin:unpack-unsigned-integer($int.short.B, 0, 2, "big-endian") and
    $b eq bin:unpack-unsigned-integer($int.short.B, 0, 2, "BE")
