deep-equal(
  fn:random-number-generator(fn:current-dateTime())?permute(1 to 100),
  fn:random-number-generator(fn:current-dateTime())?permute(1 to 100)
)
