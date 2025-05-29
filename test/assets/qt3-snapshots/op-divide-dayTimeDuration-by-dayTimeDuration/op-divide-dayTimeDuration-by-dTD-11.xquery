fn:round-half-to-even(
  (xs:dayTimeDuration("P42DT10H10M") div xs:dayTimeDuration("P10DT10H10M")) div
    (xs:dayTimeDuration("P20DT10H10M") div xs:dayTimeDuration("P18DT10H10M")),
  15
)
