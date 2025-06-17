declare function local:play (
  $secret-number as xs:integer,
  $guessed-number as xs:integer,
  $translator as function (xs:string) as xs:string
) {
  switch (true())
    case $guessed-number eq $secret-number return
      $translator("You won!")
    case $guessed-number lt $secret-number return
      $translator("The secret number is greater.")
    default (: $guessed-number gt $secret-number :) return
      $translator("The secret number is lower.")
};

local:play(76, 86, function ($x) { $x }) (: Keep English :),
local:play(
  76,
  86,
  map {
    "You won!": "Du hast gewonnen!",
    "The secret number is greater.": "Die geheime Zahl ist groesser.",
    "The secret number is lower.": "Die geheime Zahl ist kleiner."
  }
)
