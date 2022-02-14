
function updateQty(product, price, isIncrease){
    let getQty = document.getElementById(product + '-input-field')
    let getQtyValue = parseInt(getQty.value)
    //console.log(getQtyValue)
   
    if(isIncrease){
        getQtyValue = getQtyValue + 1

    }else if(getQty.value > 0){
        getQtyValue = getQtyValue - 1
    }
    //UPDATE THE INCREASE AND DECREASE VALUE
    getQty.value = getQtyValue

    let productPrice = document.getElementById(product + '-product-price')
   //let proPriceAmount = parseInt(productPrice.innerText)
    productPrice.innerText = getQtyValue * price

    //update subtotal,tax,and totalprice
    calculationPrice()
     
}
//function for the calculation of subtotal, tax and total
function totalPrice(product){
    const inputId = document.getElementById(product + '-input-field')
    const  inputNumber = parseInt(inputId.value)
    return inputNumber
}

function calculationPrice(){
  const getPhoneTotal =   totalPrice('phone')*1200
  const getCasingTotal = totalPrice('casing')*59
  const subTotalAmount = getPhoneTotal + getCasingTotal
 
  const tax = subTotalAmount * .1
  const totalPriceAmount = subTotalAmount + tax
  console.log(totalPriceAmount)
  document.getElementById('subtotal-price').innerText = subTotalAmount
  document.getElementById('tax-amount').innerText = tax
  document.getElementById('total-price').innerText = totalPriceAmount

}


//addevent listener for phone
document.getElementById('btn-plus').addEventListener('click',function(){
   updateQty('phone', 1200, true)
})
document.getElementById('btn-minus').addEventListener('click',function(){
    updateQty('phone', 1200, false)
})

//addeventListener for phonse casing
document.getElementById('btn-casing-plus').addEventListener('click',function(){
    updateQty('casing', 59, true)
 })
 document.getElementById('btn-casing-minus').addEventListener('click',function(){
     updateQty('casing',59,false)
 })

 //delete info form shopping card

 document.getElementById('delete-btn').addEventListener('click', function(){
     const getDeleteId = document.getElementById('info-delete')
     document.getElementById('casing-product-price').innerText = ''
     getDeleteId.style.display = 'none'
        // clear field
       

 })