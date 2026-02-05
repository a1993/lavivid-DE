// Custom add to cart form handler for product blocks
document.addEventListener('DOMContentLoaded', () => {
  theme.addDelegateEventListener(document, 'submit', '.custom-add-to-cart-form', async (evt, form) => {
    evt.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.setAttribute('aria-disabled', 'true');
    submitBtn.classList.add('is-loading');

    const formData = new FormData(form);

    try {
      const response = await fetch('/cart/add', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/javascript',
          'X-Requested-With': 'XMLHttpRequest'
        }
      });

      const data = await response.json();

      if (response.ok) {
        // Dispatch cart change event
        document.dispatchEvent(new CustomEvent('on:cart:change', { bubbles: true }));

        // Open cart drawer
        document.dispatchEvent(new CustomEvent('dispatch:cart-drawer:open'));
      } else {
        // Handle error
        console.error('Add to cart error:', data);
      }
    } catch (error) {
      console.error('Add to cart failed:', error);
    } finally {
      submitBtn.classList.remove('is-loading');
      submitBtn.removeAttribute('aria-disabled');
    }
  });
});