boolean(
  one-or-more(
    for $x in 1 to month-from-date(current-date())
    return <a/>
  )
)
