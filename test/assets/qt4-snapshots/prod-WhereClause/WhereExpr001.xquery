if (
  count(
    for $f in //*
    where $f/File
    return $f/File[1]
  ) =
    count(//File[1])
) then
  <Same />
else
  <notSame />
