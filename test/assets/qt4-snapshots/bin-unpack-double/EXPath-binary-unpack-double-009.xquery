bin:to-octets(
  bin:pack-double(
    bin:unpack-double(
      bin:from-octets((127, 240, 0, 0, 0, 0, 0, 1)),
      0,
      "most-significant-first"
    ),
    "most-significant-first"
  )
)
