// Add functionality to the "Add to Cart" button
const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('محصول به سبد خرید منتقل شد');
  });
});