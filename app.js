
function Billing() {
    let subTotal = document.getElementById('sub-total');
    
    
    let PhonePrice = document.getElementById('phn-price');
    const PhonePriceTotal = parseInt(PhonePrice.innerText);
    let CasePrice = document.getElementById('case-price');
    const CasePriceTotal = parseInt(CasePrice.innerText);
    const bill = PhonePriceTotal + CasePriceTotal;
    subTotal.innerText = bill;
    const tax = (bill * .15).toFixed(2);
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = bill + parseFloat(tax);

}

function updateQuantity(product, isIncreasing, price) {
    
    const Input = document.getElementById(product+'-input-num');
    let inputValue = parseInt(Input.value);
    
    if (isIncreasing) {
        inputValue++;
    }
    
    else {
        if (inputValue > 0) {
            inputValue--;
        }
    }
  
    const priceText = document.getElementById(product+'-price');
    priceText.innerText = price * inputValue;
   
    Input.value = inputValue;
    Billing()
    
}

document.getElementById('btn-plus-phn').addEventListener('click', function (e) {
    updateQuantity('phn', true, 1199)
    e.stopImmediatePropagation()
    
})
document.getElementById('btn-minus-phn').addEventListener('click', function (e) {
    updateQuantity('phn',false,1199);
    e.stopImmediatePropagation()
    
})
document.getElementById('btn-plus-casing').addEventListener('click', function (e) {
    
    updateQuantity('case', true, 59)
    e.stopImmediatePropagation()
})
document.getElementById('btn-minus-casing').addEventListener('click', function (e) {
    
    updateQuantity('case', false, 59)
    e.stopImmediatePropagation()
})

document.getElementById('check-out-btn').addEventListener('click', function () {
    // window.location.href = "bill.html"
    let phn = document.getElementById('phn-input-num').value;
    phn = parseInt(phn);
    let casing = document.getElementById('case-input-num').value;
    casing = parseInt(casing);

    if (phn == 0 && casing == 0) {
        alert('No Product in the cart!! Please Shop again');
        document.getElementById('bill-table').style.display = 'none';
        return;
    }
    document.getElementById('bill-table').style.display = 'block';
    const tbody = document.getElementById('table-body');

    for (const x = 0; x < tbody.childElementCount;){
        tbody.removeChild(tbody.children[x])
    }
    

    
    const phnPrice = document.getElementById('phn-price').innerText;
    
    const casePrice = document.getElementById('case-price').innerText;
    
    const tr = document.createElement('tr');
    const tr2 = document.createElement('tr');
    let x = 1;
    if (phn != 0) {
        tr.innerHTML =
        `
        <tr>
        <th scope="row">${x}</th>
        <td>iPhone 11 128GB Black</td>
        <td>${phn}</td>
        <td>$1199</td>
        <td>$${phnPrice}</td> 
        </tr>
             
        `
        document.getElementById('table-body').appendChild(tr);
        x = x + 1;
    }
    if (casing != 0) {
        tr2.innerHTML =
        `
        <tr>
        <th scope="row">${x}</th>
        <td>iPhone 11 Silicone Case - Black</td>
        <td>${casing}</td>
        <td>$59</td>
        <td>$${casePrice}</td> 
        </tr>

        `
    document.getElementById('table-body').appendChild(tr2);
    }

    greetings();
})

function greetings() {
    const billTable = document.getElementById('bill-table');
    if (document.getElementById('bill-receipt') != null) {
        let bill = document.getElementById('bill-receipt');
        let parentbill = bill.parentNode;
        parentbill.removeChild(bill);

    }
    else {
        
    }
    
    
    let div = document.createElement('div');
    div.setAttribute('id', 'bill-receipt');
    const sub = document.getElementById('sub-total').innerText;
    const tax = document.getElementById('tax').innerText;
    const total = document.getElementById('total-price').innerText;
    div.innerHTML = `
    <h3>Money Receipt</h3>
    <p>Subtotal Bill: <b>$${sub}</b></p>
    <p>Tax: <b>$${tax}</b></p>
    <p>Total Payment bill: <b>$${total}</b></p>
    `
    billTable.appendChild(div);
}


