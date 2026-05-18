# 📊 Fetch Data from Table (JavaScript Project)

A simple web project that displays product data in an HTML table using JavaScript.

## 🚀 Features

- Display product data dynamically
- Click button to load data
- Clean HTML table layout
- Built using pure JavaScript (no frameworks)
- Styled with Tailwind CSS

---

## 📁 Project Structure

```bash
project/
│
├── index.html
├── script.js
└── README.md


📦 Data Structure

The data is stored in a JavaScript array of objects:

Product ID
Product Name
Price
Quantity


🖥️ How It Works

Click the "Get Products" button
JavaScript reads data from an array
Data is inserted into the HTML table
Table updates dynamically using DOM manipulation

💻 Code Explanation
HTML Table

The table contains:

<thead> → Table headers
<tbody id="list"> → Where data is displayed

JavaScript Function
getList() → Loads and displays data
innerHTML → Used to insert rows dynamically
forEach() → Loops through product array


🧠 Example Data
{
  product_id: 1,
  productname: "Laptop",
  price: 500,
  quantity: 3
}

🎯 Technologies Used
HTML5
Tailwind CSS
JavaScript (ES6)

📌 Future Improvements
Add input form to insert products
Delete and update rows
Save data using LocalStorage or database
Add search filter


👨‍💻 Author
Created by Yaxye Rosi





