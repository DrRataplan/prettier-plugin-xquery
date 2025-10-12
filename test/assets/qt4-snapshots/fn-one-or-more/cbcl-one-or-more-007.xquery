boolean(
  one-or-more(
    for $x in (1 to 10)[. div 2 = 1]
    return true()
  )
)
