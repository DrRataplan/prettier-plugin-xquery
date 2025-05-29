let $poem :=
  <poem author="Wilhelm Busch">
Kaum hat dies der Hahn gesehen,
Fängt er auch schon an zu krähen:
Kikeriki! Kikikerikih!!
Tak, tak, tak! - da kommen sie.
</poem>
return fn:matches($poem, "^Kaum.*gesehen,$", "m")
