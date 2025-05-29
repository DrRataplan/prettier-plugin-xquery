declare variable $myVar := unordered(fn:reverse((<a/>, <b/>)));

deep-equal($myVar, (<a/>, <b/>)) or deep-equal($myVar, (<b/>, <a/>))
