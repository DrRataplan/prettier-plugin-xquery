declare namespace functx = "http://www.example.com/";

(:~
 : The month of a date as a word (January, February, etc.) : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_month-name-en.html : @param $date the date
 :)
declare function functx:month-name-en (
  $date as xs:anyAtomicType?
) as xs:string? {
  (
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  )[month-from-date(xs:date($date))]
};

(functx:month-name-en("2004-01-23"))
