(
  concat("one ", ?, " three"),
  substring-before("one two three", ?),
  matches(?, "t.*o"),
  xs:NCName(?)
)("two")
