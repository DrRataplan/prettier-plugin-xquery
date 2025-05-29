declare variable $zero external;

declare variable $zls external;

contains-token(codepoints-to-string(($zero + 9, 10, 13, 32, 13, 10, 9)), $zls)
