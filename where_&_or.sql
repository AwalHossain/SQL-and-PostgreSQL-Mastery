
-- Write sql query to find out only apple and samsung manufacturer phone out of all phones

select name, manufacturer from phones where manufacturer in ('Apple', 'Samsung')