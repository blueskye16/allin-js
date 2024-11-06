SELECT
  EXTRACT(YEAR FROM created_at) year,
  COUNT(DISTINCT user_id) number_of_buyer
FROM `km-sep24-project.thelook_ecommerce.orders`
WHERE status = 'Complete'
  AND
  DATE_TRUNC(DATE(created_at), YEAR) = '2022-01-01'
GROUP BY 1

Please find the number of unique buyers who completed an order during year 2022

Pease find the top 3 product category that have the most variety of SKU that being input to the system in the year 2019

Please find the Monthly Unique Buyer (MUB), Frequency, and Average Basket Size (ABS) in the past 3 months. Which functions and clauses that can get all of those metrics above?

*Monthly Unique Buyer(MUB) number of distinct buyer/months
Frequency number of purchase/user/month
Average Basket Size(ABS) is the average sales per user



