
SELECT emp_name, salary, department FROM employees 
WHERE department = 'HR';

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    total_amount DECIMAL(10, 2)
);

INSERT INTO orders (order_id, customer_id, total_amount)
VALUES
    (101, 1, 200.00),
    (102, 2, 300.00),
    (103, 1, 150.00),
    (104, 3, 400.00),
    (105, 2, 250.00);


SELECT customer_id, avg(total_amount) as avg_total  FROM orders
GROUP BY(customer_id) HAVING avg(total_amount) >250;


