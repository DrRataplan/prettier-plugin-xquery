declare
  variable $input := <Events>
              <EventList>
                 <DATA datetime="2022-02-04 15:00:00" name="mr john" action="leave"/>
                 <DATA datetime="2022-02-04 15:00:00" name="jane doe" action="leave"/>
                 <DATA datetime="2022-02-04 14:00:00" name="jane doe" action="enter"/>
                 <DATA datetime="2022-02-04 13:30:00" name="jane doe" action="leave"/>
                 <DATA datetime="2022-02-04 13:00:00" name="mr john" action="enter"/>
                 <DATA datetime="2022-02-04 12:00:00" name="jane doe" action="enter"/>
                 <DATA datetime="2022-02-03 15:00:00" name="mr john" action="leave"/>
                 <DATA datetime="2022-02-03 15:00:00" name="jane doe" action="leave"/>
                 <DATA datetime="2022-02-03 13:00:00" name="mr john" action="enter"/>
                 <DATA datetime="2022-02-03 12:00:00" name="jane doe" action="enter" />
              </EventList>
           </Events>;

<Result> {
  for sliding window $window in reverse($input//DATA)
    start $enter when $enter/@action = "enter"
    end $leave when $leave/@action = "leave" and $leave/@name = $enter/@name
  let $entry := xs:dateTime(translate($enter/@datetime, " ", "T"))
  let $departure := xs:dateTime(translate($leave/@datetime, " ", "T"))
  let $duration := $departure - $entry
  let $tripDate := xs:date($entry)
  let $tripName := string($enter/@name)
  group by $tripDate, $tripName
  let $totalDuration := sum($duration)
  order by $tripDate descending, $tripName
  return <DATA datetime="{
      $tripDate
    }" name="{
      $tripName
    }" totaltime="{
      $totalDuration div xs:dayTimeDuration("PT1H")
    }"/>
} </Result>
