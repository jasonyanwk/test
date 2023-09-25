var totalAmount = sessionStorage.getItem("totalAmount");
if (totalAmount) {
  document.getElementById("amount").textContent = "Total amount:$" + totalAmount;
} else {
  window.location.href = "com3105_shopping_cart.html";
}

    function payWithWeChat() {
      window.location.href = "https://pay.weixin.qq.com/";
    }

    function payWithAlipay() {
      window.location.href = "https://www.alipay.com/";
    }

    function payWithVisa() {
      window.location.href = "https://usa.visa.com/pay-with-visa/checkout.htmt";
    }