declare namespace functx = "http://www.example.com/";

(:~
 : The day of the week, from a date : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_day-of-week.html : @param $date the date
 :)
declare function functx:day-of-week (
  $date as xs:anyAtomicType?
) as xs:integer? {
  if (empty($date)) then (
  ) else
    xs:integer(
      (xs:date($date) - xs:date("1901-01-06")) div xs:dayTimeDuration("P1D")
    ) mod
      7
};

(functx:day-of-week(xs:dateTime("2004-11-04T12:00:13")))
