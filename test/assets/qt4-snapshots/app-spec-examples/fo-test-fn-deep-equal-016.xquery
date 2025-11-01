deep-equal(
  parse-xml("<para style='bold'><span>x</span></para>"),
  parse-xml("<para style=' bold'> <span>x</span></para>")
)
