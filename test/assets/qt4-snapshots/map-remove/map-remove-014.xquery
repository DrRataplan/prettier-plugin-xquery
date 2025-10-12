map {
  current-dateTime(): 100,
  current-dateTime() => adjust-dateTime-to-timezone(()): 101
}
  => map:remove(current-dateTime())
  => map:get(current-dateTime() => adjust-dateTime-to-timezone(()))
