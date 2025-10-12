declare variable $i := false();

declare variable $t := false();

some $i in (true(), true()), $t in (true(), true()) satisfies $i eq $t
