-- Lists the number of records with same score
SELECT score, COUNT(score) AS number
FROM second_table
ORDER BY COUNT(score) DESC;
