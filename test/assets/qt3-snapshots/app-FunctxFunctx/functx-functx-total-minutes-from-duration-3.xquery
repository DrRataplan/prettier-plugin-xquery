declare namespace functx = "http://www.example.com/";

(:~
 : The total number of minutes in a dayTimeDuration : : @author Priscilla Walmsley, Datypic : @version 1.0 : @see http://www.xqueryfunctions.com/xq/functx_total-minutes-from-duration.html : @param $duration the duration
 :)
declare function functx:total-minutes-from-duration (
  $duration as xs:dayTimeDuration?
) as xs:decimal? {
  $duration div xs:dayTimeDuration("PT1M")
};

(functx:total-minutes-from-duration(xs:dayTimeDuration("PT3H")))
