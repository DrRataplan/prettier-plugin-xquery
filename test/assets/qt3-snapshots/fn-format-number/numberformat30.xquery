string-join(
  (
    format-number(-26931.4, "-###,###.###"),
    format-number(-26931.4, "zzz-###,###.###", "myminus"),
    format-number(-26931.4, "_###,###.###", "myminus")
  ),
  " "
)
