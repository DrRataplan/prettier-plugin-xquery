let $salt := "D;%yL9TS:5PalS/d"

return hash("password123" || $salt, "SHA-256")
