let $selection := random-number-generator()?permute(1 to 10000)[. mod 2 = 0]
return count((1 to 10000)[$selection])
