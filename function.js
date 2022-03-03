
function upProductNum(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-num');
    let productNum = productInput.value;
    if (isIncreasing) {
        productNum = parseInt(productNum) + 1;
    }
    else if (productNum > 0) {
        productNum = parseInt(productNum) - 1;
    }
    productInput.value = productNum
    //update case total
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNum * price;
    // update total
    calcTotal();
}
//cal for product input or nmb
function getInput(product) {
    const productInput = document.getElementById(product + '-num');
    const productNum = parseInt(productInput.value);
    return productNum
}
// calculate total 
function calcTotal() {
    const phnTotal = getInput('phn') * 1219
    const caseTotal = getInput('case') * 59
    const subTotal = phnTotal + caseTotal
    const tax = subTotal / 10
    const total = subTotal + tax
    //update on the html
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax').innerText = tax
    document.getElementById('total').innerText = total
}

//for phone plus
document.getElementById('phn-plus').addEventListener('click', function () {
    upProductNum('phn', 1219, true);
})
//for phone minus
document.getElementById('phn-minus').addEventListener('click', function () {
    upProductNum('phn', 1219, false);
})

//for case plus
document.getElementById('case-plus').addEventListener('click', function () {
    upProductNum('case', 59, true);
})
//for case minus
document.getElementById('case-minus').addEventListener('click', function () {
    upProductNum('case', 59, false);
})
