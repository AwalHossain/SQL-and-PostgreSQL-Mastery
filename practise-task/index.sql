
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


CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50),
    age INT,
    gender VARCHAR(10)
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50),
    credits INT
);

INSERT INTO students (student_id, student_name, age, gender)
VALUES
    (1, 'Alice', 22, 'Female'),
    (2, 'Bob', 21, 'Male'),
    (3, 'Charlie', 23, 'Male');

INSERT INTO courses (course_id, course_name, credits)
VALUES
    (101, 'Mathematics', 3),
    (102, 'History', 4),
    (103, 'Physics', 3);

-- Enrollment table with student-course relationships
CREATE TABLE enrollment (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT
);

INSERT INTO enrollment (enrollment_id, student_id, course_id)
VALUES
    (1, 1, 101),
    (2, 1, 102),
    (3, 2, 103),
    (4, 3, 101);



SELECT s.student_name, c.course_name, c.credits from enrollment e
 join students s on s.student_id = e.student_id 
 JOIN courses c on c.course_id = e.course_id;
 


 CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    department_id INT
);

CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50)
);

CREATE TABLE salaries (
    emp_id INT,
    salary DECIMAL(10, 2)
);

INSERT INTO employees (emp_id, emp_name, department_id)
VALUES
    (1, 'John Doe', 1),
    (2, 'Jane Smith', 2),
    (3, 'Michael Johnson', 1),
    (4, 'Emily Brown', 3);

INSERT INTO departments (department_id, department_name)
VALUES
    (1, 'HR'),
    (2, 'IT'),
    (3, 'Finance');

INSERT INTO salaries (emp_id, salary)
VALUES
    (1, 50000.00),
    (2, 60000.00),
    (3, 55000.00),
    (4, 52000.00);


    -- Task 4: Multiple Joins and Aggregation Create three tables named "employees," "departments," and "salaries" with columns as follows:

    -- Write an SQL query to retrieve the department name and the average salary of employees working in each department. Sort the results by the average salary in descending order

    SELECT d.department_name, avg(s.salary)AS average_salary from departments d
    JOIN employees e 
    on d.department_id = e.department_id
    join salaries s
    on e.emp_id = s.emp_id
    GROUP BY (d.department_id) 
    ORDER BY average_salary DESC;


-- Task 5: Aggregation and Grouping Create a table named "orders" with columns (order_id, customer_id, order_date, total_amount) and insert the following data:
    CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    total_amount DECIMAL(10, 2)
);

INSERT INTO orders (order_id, customer_id, order_date, total_amount)
VALUES
    (101, 1, '2023-01-05', 200.00),
    (102, 2, '2023-01-06', 300.00),
    (103, 1, '2023-02-10', 150.00),
    (104, 3, '2023-02-15', 400.00),
    (105, 2, '2023-03-20', 250.00);

-- Write an SQL query to find the total sales amount for each month, along with the number of orders in that month.

SELECT
    CASE EXTRACT(MONTH FROM order_date)
        WHEN 1 THEN 'January'
        WHEN 2 THEN 'February'
        WHEN 3 THEN 'March'
        WHEN 4 THEN 'April'
        WHEN 5 THEN 'May'
        WHEN 6 THEN 'June'
        WHEN 7 THEN 'July'
        WHEN 8 THEN 'August'
        WHEN 9 THEN 'September'
        WHEN 10 THEN 'October'
        WHEN 11 THEN 'November'
        WHEN 12 THEN 'December'
    END AS month_name,
    SUM(total_amount) AS total_sales
FROM orders
GROUP BY EXTRACT(MONTH FROM order_date)
ORDER BY EXTRACT(MONTH FROM order_date);



-- Task 6: Using JOINs and Aggregation Create two tables named "employees" and "salaries" with columns as follows:

DROP TABLE if EXISTS salaries;

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    department_id INT
);

CREATE TABLE salaries (
    emp_id INT,
    salary DECIMAL(10, 2)
);

INSERT INTO employees (emp_id, emp_name, department_id)
VALUES
    (1, 'John Doe', 1),
    (2, 'Jane Smith', 2),
    (3, 'Michael Johnson', 1),
    (4, 'Emily Brown', 3);

INSERT INTO salaries (emp_id, salary)
VALUES
    (1, 50000.00),
    (2, 60000.00),
    (3, 55000.00),
    (4, 52000.00);


-- Write an SQL query to retrieve the department name and the average salary of employees in each department, excluding departments with fewer than two employees.

SELECT e.department_id, avg(s.salary) as avg_salry from employees e 
JOIN salaries s ON e.emp_id = s.emp_id
GROUP BY e.department_id
HAVING COUNT(e.emp_id) >=2;



-- Task 7: Using HAVING with Aggregation Create a table named "products" with columns (product_id, product_name, stock_quantity) and insert the following data:

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    stock_quantity INT
);

INSERT INTO products (product_id, product_name, stock_quantity)
VALUES
    (101, 'Widget A', 20),
    (102, 'Widget B', 10),
    (103, 'Widget C', 15),
    (104, 'Widget D', 5);

-- Write an SQL query to find the product names and their total sales quantity for products with a total sales quantity greater than 5.

SELECT p.product_name, SUM(s.sales_quantity) AS total_sales_quantity
FROM products p
JOIN sales s ON p.product_id = s.product_id
GROUP BY p.product_name
HAVING SUM(s.sales_quantity) > 5;


-- Task 8: Combining Multiple Joins Create three tables named "customers," "orders," and "order_items" with columns as follows:


DROP TABLE if EXISTS customers;


CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    city VARCHAR(50)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    order_date DATE
);

CREATE TABLE order_items (
    item_id INT PRIMARY KEY,
    order_id INT,
    product_name VARCHAR(50),
    quantity INT
);

INSERT INTO customers (customer_id, customer_name, city)
VALUES
    (1, 'John Doe', 'New York'),
    (2, 'Jane Smith', 'Los Angeles'),
    (3, 'Michael Johnson', 'Chicago');

INSERT INTO orders (order_id, customer_id, order_date)
VALUES
    (101, 1, '2023-01-05'),
    (102, 2, '2023-02-10'),
    (103, 1, '2023-02-15');

INSERT INTO order_items (item_id, order_id, product_name, quantity)
VALUES
    (1, 101, 'Widget A', 2),
    (2, 101, 'Widget B', 3),
    (3, 102, 'Widget C', 1),
    (4, 103, 'Widget A', 4);

-- Write an SQL query to retrieve the customer name, order date, and the total quantity of items ordered for each order.


SELECT c.customer_name, o.order_date, COUNT(DISTINCT ot.quantity) from customers c
join orders o on o.customer_id = c.customer_id
join order_items ot on o.order_id = ot.order_id
GROUP BY c.customer_name, o.order_date;
