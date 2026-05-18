const products = [
    {
        product_id: 1,
        productname: "Laptop",
        price: 500,
        quantity: 3
    },

    {
        product_id: 2,
        productname: "Mouse",
        price: 20,
        quantity: 10
    },

    {
        product_id: 3,
        productname: "Keyboard",
        price: 40,
        quantity: 5
    }
];

function getList() {

    const list = document.getElementById("list");

    // Clear old rows
    list.innerHTML = "";

    products.forEach(product => {

        list.innerHTML += `
            <tr>
                <td class="border p-2">${product.product_id}</td>
                <td class="border p-2">${product.productname}</td>
                <td class="border p-2">$${product.price}</td>
                <td class="border p-2">${product.quantity}</td>
            </tr>
        `;

    });

}