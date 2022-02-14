
function productUpdate(product, price, isChange){
    let getQty = document.getElementById(product + '-input-field')
    let getQtyValue = parseInt(getQty.value)
    //console.log(getQtyValue)
   
    if(isChange){
        getQtyValue = getQtyValue + 1

    }else if(getQty.value > 0){
        getQtyValue = getQtyValue - 1
    }
    //UPDATE THE INCREASE AND DECREASE VALUE
    getQty.value = getQtyValue

    const getProduct = document.getElementById(product +'-product-price')
    getProduct.innerText = getQtyValue * price
    //udate subtotal price
    calculationPrice()
}

//plus btn addEventListener code here
document.getElementById('btn-plus').addEventListener('click',function(){
    productUpdate('phone',1200, true)
})

document.getElementById('btn-minus').addEventListener('click',function(){
    productUpdate('phone',1200, false)

})

document.getElementById('btn-casing-plus').addEventListener('click',function(){
    productUpdate('casing',59, true)
   
})

document.getElementById('btn-casing-minus').addEventListener('click',function(){
    productUpdate('casing',59, false)
   
})

//function for subtotal and total counting
function totalPrice(product){
   const getProductQty =  document.getElementById(product + '-input-field').value
    return subtotalAmount = parseInt(getProductQty)

}

function calculationPrice(){
    const subtotalPhonePrice =  document.getElementById('subtotal-price') = totalPrice('phone')*1200
    const subtotalCasingPrice =  document.getElementById('subtotal-price') = totalPrice('casing')*59
    const subTotal = subtotalCasingPrice + subtotalPhonePrice

     const taxCost = subTotal/20;
     const totalPrice = subTotal + taxCost
     
     document.getElementById('subtotal-price').innerText = subTotal
     document.getElementById('tax-amount').innerText = taxCost
     document.getElementById('total-price').innerText = totalPrice
    
}