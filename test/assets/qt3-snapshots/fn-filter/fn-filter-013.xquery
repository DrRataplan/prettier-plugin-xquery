fn:filter((//node(), 1, "string", 3.14, 2.7e0, fn:exists#1), function ($arg) {
    $arg instance of function(*)
  })
