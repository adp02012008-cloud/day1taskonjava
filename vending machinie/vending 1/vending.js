const mun = document.getElementById('mun');
const lay = document.getElementById('lay');
const kurk = document.getElementById('kurk');
const kitk = document.getElementById('kitk');
const btnmun = document.getElementById('btnmun');

function parseQty(input){
    if(!input) return 0;
    const v = parseInt(input.value, 10);
    return Number.isNaN(v) ? 0 : v;
}

function checkvalid(){
    // Read numeric values from inputs
    const m = parseQty(mun);
    const l = parseQty(lay);
    const k = parseQty(kurk);
    const kt = parseQty(kitk);

    // Prices (match those in HTML data-price or the values you want)
    const prices = {
        munch: 30,
        lays: 25,
        kur: 20,
        kit: 40
    };

    const items = [];

    // helper to validate and push
    function addIfValid(name, qty, price){
        if(qty <= 0) return;
        if(qty > 10){ qty = 10; }
        const amount = qty * price;
        items.push({ name, qty, price, amount });
    }

    addIfValid('Munch', m, prices.munch);
    addIfValid('Lays', l, prices.lays);
    addIfValid('Kurkure', k, prices.kur);
    addIfValid('KitKat', kt, prices.kit);

    if(items.length === 0){ alert('No items selected. Choose quantity > 0 to calculate amount.'); return; }

    // Build summary
    let total = 0;
    let lines = items.map(it => { total += it.amount; return `${it.name}: ${it.qty} × ₹${it.price} = ₹${it.amount}`; });
    lines.push('-------------------------');
    lines.push(`Grand Total: ₹${total}`);

    alert(lines.join('\n'));
}

// Keep existing behavior: wire the button if it exists
if(btnmun){ btnmun.addEventListener('click', checkvalid); }

