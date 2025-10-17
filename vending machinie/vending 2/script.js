let total=0, discount=false;
function addItem(){
  const val=document.getElementById('product').value.split('-');
  const name=val[0], price=+val[1];
  const qty=+document.getElementById('qty').value;
  total+=price*qty;
  document.getElementById('cart').innerHTML+=`<li>${name} x${qty}</li>`;
  showTotal();
}
function applyDisc(){
  const code=document.getElementById('code').value.trim().toUpperCase();
  discount=(code==='SAVE30');
  showTotal();
}
function showTotal(){
  let amt=discount?total*0.7:total;
  document.getElementById('total').textContent=amt.toFixed(2);
}
function pay(){
  if(total===0){msg('No items selected');return;}
  const success=Math.random()<0.9;
  msg(success?'Payment successful! Enjoy your items.':'Payment failed!');
  if(success){total=0;discount=false;document.getElementById('cart').innerHTML='';showTotal();}
}
function msg(t){document.getElementById('msg').textContent=t;}