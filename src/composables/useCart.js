import { ref, computed } from 'vue'

const cartItems = ref([])
const isCartOpen = ref(false)

export function formatCOP(val) {
  if (typeof val !== 'number') {
    return val
  }
  return `$ ${val.toLocaleString('es-CO')} COP`
}

export function useCart() {
  const totalItems = computed(() => {
    return cartItems.value.reduce((acc, item) => acc + item.quantity, 0)
  })

  const cartTotalNumber = computed(() => {
    return cartItems.value.reduce((acc, item) => acc + item.priceNumber * item.quantity, 0)
  })

  const cartTotalFormatted = computed(() => {
    return formatCOP(cartTotalNumber.value)
  })

  function addToCart(product, quantity = 1, notes = '') {
    const existing = cartItems.value.find((item) => item.id === product.id)
    if (existing) {
      existing.quantity += quantity
      if (notes) {
        existing.notes = existing.notes ? `${existing.notes} | ${notes}` : notes
      }
    } else {
      cartItems.value.push({
        id: product.id,
        name: product.name,
        priceNumber: product.priceNumber,
        price: product.price,
        image: product.image,
        category: product.category || 'General',
        quantity,
        notes,
      })
    }
  }

  function removeFromCart(id) {
    const idx = cartItems.value.findIndex((item) => item.id === id)
    if (idx !== -1) {
      cartItems.value.splice(idx, 1)
    }
  }

  function updateQuantity(id, delta) {
    const item = cartItems.value.find((item) => item.id === id)
    if (item) {
      item.quantity += delta
      if (item.quantity <= 0) {
        removeFromCart(id)
      }
    }
  }

  function clearCart() {
    cartItems.value = []
  }

  function toggleCart(open) {
    if (typeof open === 'boolean') {
      isCartOpen.value = open
    } else {
      isCartOpen.value = !isCartOpen.value
    }
  }

  return {
    cartItems,
    isCartOpen,
    totalItems,
    cartTotalNumber,
    cartTotalFormatted,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
  }
}
