# Sephora Skincare Products Analysis
Hi! I'm Iffath Namira and this my first full PERN Stack project!

## Description
In this project, I used the ([Sephora Skincare Ingredients](https://www.kaggle.com/datasets/dominoweir/skincare-product-ingredients?resource=download)) dataset from Kaggle to analyze useful insights into things like the popularity of different brands, the popularity of different products, and the prices of different products. For my data visualizations, I used the chart-js-2 library along with React to generate a bar chart and two pie charts. With the data analysis and visualizations, I hope to show a clear breakdown of different skincare brands and products. 

## Installation
1. Clone the repository.
2. Set up the database in the postgres terminal:
PGUSER=<postgres_username>
PGPASSWORD=<postgres_password>
PGHOST=localhost
PGDATABASE=skincare_analysis
PGPORT=5432
PORT=3006
NODE_ENV=development
3. Install the dependencies: Use npm install to install node.js, chart-js-2, react, and express.
4. After you have all the dependencies and the clone set up, you need to run the project by changing into both the frontend and backend directories through two different terminals and using npm start on both.

## Usage
After the code starts to run on your local browser, you will see a dropdown menu with all the available options. To change the colors or measurements of a chart, go to frontend/analysis/components/charts. To change which columns the project analyzes, go to backend/controllers/productResultsControllers. 

## Wireframes
Before I started to code my project I made wireframes to show myself what I want to make:
![Alt text](/Users/student/Desktop/Screenshot 2025-03-06 at 5.26.41 PM.png)
