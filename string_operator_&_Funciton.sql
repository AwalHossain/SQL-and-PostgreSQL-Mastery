-- To merge two or multiple string together, we can use some string operator as well function


select name || ', ' || country from citites;  /* Mergign two or multiple string using pipe only works in postgreSQL or might be SQL but not supported in MySQL */


select upper(concat(name, ', ' , country)) as location  from cities; /* Works fine in MysQL and PostgreSQL */


