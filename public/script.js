const stripe = Stripe('');

document.getElementById('checkout-button').addEventListener('click', () => {
  fetch('/create-checkout-session', {
    method: 'POST',
  })
  .then((response) => response.json())
  .then((sessionId) => {
    return stripe.redirectToCheckout({ sessionId: sessionId.id });
  })
  .then((result) => {
    if (result.error) {
      alert(result.error.message);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
