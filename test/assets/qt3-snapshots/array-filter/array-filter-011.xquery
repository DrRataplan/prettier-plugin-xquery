array:filter(
  ["Monday", "Friday", "Tuesday"],
  map {
    "Monday": true(),
    "Tuesday": false(),
    "Wednesday": true(),
    "Thursday": 4,
    "Friday": true()
  }
)
