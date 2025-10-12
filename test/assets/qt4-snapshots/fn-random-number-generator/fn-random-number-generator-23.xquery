let $G := fn:random-number-generator(fn:current-dateTime())
return deep-equal($G?permute(1 to 100), $G?next()?permute(1 to 100))
