function fetchProducts(done) {
    $.get('/home', function(data) {
        done(data)
    })
}


function createproductCard(product) {
    return $(
        `<div class="p-1 col-3">
        <div class="mt-3  card">
            <div class="p-1  row">
                <div class="col-4">${product.name}</div>
                <div class="col-6">${product.manufacturer}</div>
                <button type="button" class="col-1 close" aria-label="Close" id = "ad">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="p-1">${product.price}</div>
            <button type="button" class="mt-2 mx-2 mb-2 btn btn-outline-primary">Buy</button>
        </div>
    </div>`)
}


$(function() {
    let productlist = $('#product-list')

    fetchProducts(function(products) {
        productlist.empty()
        for (product of products) {
            productlist.append(createproductCard(product))
        }
    })
})