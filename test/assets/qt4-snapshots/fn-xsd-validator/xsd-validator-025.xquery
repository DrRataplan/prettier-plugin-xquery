import schema namespace simple =  "http://www.w3.org/XQueryTest/simple";

xsd-validator()(<simple:duration
>sorry, no duration here</simple:duration>)?error-details
