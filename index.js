document.querySelector('#calc').addEventListener('click', calculation);

function calculation () {
    const customers = document.querySelector('#numCustomers').value;
    const coreSales = document.querySelector('#numCoreSales').value;
    const mobileSales = document.querySelector('#numMobileSales').value;  

    const totalCore = coreSales * 40;
    const totalMobile = mobileSales * 30;
    const finalCommission = (totalCore + totalMobile) / customers;

    document.querySelector('#amount').innerText = finalCommission;
}