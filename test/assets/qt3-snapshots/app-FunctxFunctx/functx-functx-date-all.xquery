declare namespace functx = "http://www.example.com/";

(:~
 : Construct a date from a year, month and day : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_date.html : @param $year the year : @param $month the month : @param $day the day
 :)
declare function functx:date (
  $year as xs:anyAtomicType,
  $month as xs:anyAtomicType,
  $day as xs:anyAtomicType
) as xs:date {
  xs:date(
    concat(
      functx:pad-integer-to-length(xs:integer($year), 4),
      "-",
      functx:pad-integer-to-length(xs:integer($month), 2),
      "-",
      functx:pad-integer-to-length(xs:integer($day), 2)
    )
  )
};

(:~
 : Pads an integer to a desired length by adding leading zeros : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_pad-integer-to-length.html : @param $integerToPad the integer to pad : @param $length the desired length
 :)
declare function functx:pad-integer-to-length (
  $integerToPad as xs:anyAtomicType?,
  $length as xs:integer
) as xs:string {
  if ($length < string-length(string($integerToPad))) then
    error(xs:QName("functx:Integer_Longer_Than_Length"))
  else
    concat(
      functx:repeat-string("0", $length - string-length(string($integerToPad))),
      string($integerToPad)
    )
};

(:~
 : Repeats a string a given number of times : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_repeat-string.html : @param $stringToRepeat the string to repeat : @param $count the desired number of copies
 :)
declare function functx:repeat-string (
  $stringToRepeat as xs:string?,
  $count as xs:integer
) as xs:string {
  string-join(
    (
      for $i in 1 to $count
      return $stringToRepeat
    ),
    ""
  )
};

(functx:date(2006, 6, 12), functx:date("2006", "06", "12"))
