<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <!-- Encabezado Principal / Navigation Bar -->
    <q-header elevated class="bg-white text-dark q-py-xs" height-hint="72">
      <q-toolbar class="q-px-md q-px-lg-xl flex items-center justify-between" style="max-width: 1320px; margin: 0 auto; width: 100%;">
        <!-- Botón menú móvil (Solo pantallas pequeñas) -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="lt-md text-primary q-mr-sm"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <!-- Brand Logo inspirado en la imagen de referencia -->
        <router-link to="/hamburguesas" class="row items-center no-decoration text-dark">
          <div class="logo-icon-wrapper q-mr-sm">
            <q-icon name="lunch_dining" size="32px" color="primary" />
          </div>
          <div class="column justify-center">
            <span class="text-weight-bolder text-h5 text-uppercase brand-font text-primary" style="line-height: 1; letter-spacing: -0.5px;">
              BURGER
            </span>
            <span class="text-weight-bold text-subtitle2 text-uppercase brand-font text-dark" style="line-height: 1; letter-spacing: 1.5px;">
              BITE
            </span>
          </div>
        </router-link>

        <!-- Navegación de Escritorio con Tabs estilizados -->
        <div class="gt-sm row items-center q-gutter-x-xs">
          <q-btn
            v-for="item in navMenuItems"
            :key="item.path"
            flat
            no-caps
            :to="item.path"
            active-class="active-nav-btn text-primary text-weight-bolder"
            class="text-weight-bold text-subtitle2 nav-btn q-px-md q-py-sm text-grey-9"
          >
            <q-icon :name="item.icon" size="18px" class="q-mr-xs" />
            {{ item.label }}
          </q-btn>
        </div>

        <!-- Acciones: Botón destacado PEDIR AHORA + Carrito -->
        <div class="row items-center q-gutter-x-sm">
          <q-btn
            unelevated
            rounded
            color="primary"
            class="q-px-lg q-py-xs text-weight-bolder text-uppercase font-display order-now-btn"
            @click="toggleCart(true)"
          >
            <q-icon name="shopping_bag" size="20px" class="q-mr-xs" />
            <span>PEDIR AHORA</span>
            <q-badge
              v-if="totalItems > 0"
              floating
              color="dark"
              text-color="white"
              rounded
              class="text-weight-bold"
            >
              {{ totalItems }}
            </q-badge>
            <q-icon name="arrow_forward" size="16px" class="q-ml-xs gt-xs" />
          </q-btn>
        </div>
      </q-toolbar>

      <!-- Subbarra de categorías deslizables horizontalmente en móvil -->
      <div class="lt-md bg-grey-2 q-py-xs q-px-sm scroll-x-nowrap row no-wrap items-center">
        <q-btn
          v-for="item in navMenuItems"
          :key="'mob-' + item.path"
          dense
          flat
          rounded
          no-caps
          size="sm"
          :to="item.path"
          active-class="bg-primary text-white text-weight-bold"
          class="q-px-sm q-py-xs q-mr-xs text-grey-8"
        >
          <q-icon :name="item.icon" size="14px" class="q-mr-xs" />
          {{ item.label }}
        </q-btn>
      </div>
    </q-header>

    <!-- Drawer Lateral para Dispositivos Móviles -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      overlay
      bordered
      class="bg-white q-pa-md"
    >
      <div class="row items-center justify-between q-mb-md q-pb-sm border-bottom">
        <div class="row items-center">
          <q-icon name="lunch_dining" size="28px" color="primary" class="q-mr-xs" />
          <span class="text-h6 text-weight-bolder text-primary brand-font">BURGER BITE</span>
        </div>
        <q-btn flat round dense icon="close" @click="leftDrawerOpen = false" />
      </div>

      <p class="text-caption text-grey-7 q-mb-md">
        Menú digital oficial con despacho a domicilio y recogida en tienda.
      </p>

      <q-list separator>
        <q-item
          v-for="item in navMenuItems"
          :key="'drawer-' + item.path"
          clickable
          v-ripple
          :to="item.path"
          active-class="text-primary text-weight-bolder bg-red-1"
          @click="leftDrawerOpen = false"
          class="rounded-borders q-my-xs"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" color="primary" />
          </q-item-section>
          <q-item-section class="text-weight-bold">{{ item.label }}</q-item-section>
          <q-item-section side>
            <q-icon name="chevron_right" color="grey-5" />
          </q-item-section>
        </q-item>
      </q-list>

      <div class="q-mt-xl q-pa-md bg-grey-2 rounded-borders text-center">
        <div class="text-caption text-weight-bold text-uppercase text-grey-8 q-mb-xs">¿Prefieres ordenar por WhatsApp?</div>
        <q-btn
          unelevated
          rounded
          color="positive"
          icon="chat"
          label="WhatsApp Directo"
          class="full-width text-weight-bold"
          href="https://wa.me/573158904321?text=Hola%20Burger%20Bite!%20Deseo%20hacer%20un%20pedido%20del%20men%C3%BA%20digital"
          target="_blank"
        />
      </div>
    </q-drawer>

    <!-- Modal / Drawer Lateral de Pedido / Carrito de Compras -->
    <q-dialog v-model="isCartOpen" position="right">
      <q-card class="column no-wrap" style="width: 440px; max-width: 95vw; height: 100vh;">
        <!-- Header del Carrito -->
        <q-card-section class="row items-center justify-between bg-primary text-white q-py-md">
          <div class="row items-center">
            <q-icon name="shopping_bag" size="24px" class="q-mr-sm" />
            <span class="text-h6 text-weight-bold">Mi Pedido</span>
          </div>
          <q-btn flat round dense icon="close" text-color="white" @click="toggleCart(false)" />
        </q-card-section>

        <!-- Lista de Productos en el Carrito -->
        <q-card-section class="col scroll q-pa-md">
          <div v-if="cartItems.length === 0" class="column items-center justify-center text-center q-pa-xl text-grey-6" style="height: 100%;">
            <q-icon name="shopping_cart" size="72px" color="grey-4" class="q-mb-md" />
            <div class="text-h6 text-weight-bold text-grey-8">Tu canasta está vacía</div>
            <p class="text-caption q-mt-xs">Explora nuestras deliciosas opciones y agrega tus comidas favoritas.</p>
            <q-btn
              unelevated
              rounded
              color="primary"
              label="Explorar Menú"
              class="q-mt-md"
              @click="toggleCart(false)"
            />
          </div>

          <q-list v-else separator>
            <q-item v-for="item in cartItems" :key="item.id" class="q-py-md">
              <q-item-section avatar top>
                <q-img :src="item.image" style="width: 64px; height: 64px; border-radius: 8px;" fit="cover" />
              </q-item-section>

              <q-item-section top>
                <div class="text-subtitle1 text-weight-bold text-dark">{{ item.name }}</div>
                <div class="text-caption text-primary text-weight-bolder">{{ formatCOP(item.priceNumber * item.quantity) }}</div>
                <div v-if="item.notes" class="text-caption text-grey-7 italic q-mt-xs">
                  Nota: {{ item.notes }}
                </div>
                <!-- Control de Cantidad -->
                <div class="row items-center q-gutter-x-xs q-mt-xs">
                  <q-btn
                    flat
                    round
                    dense
                    size="xs"
                    color="grey-8"
                    icon="remove"
                    class="bg-grey-2"
                    @click="updateQuantity(item.id, -1)"
                  />
                  <span class="text-weight-bold q-px-sm text-subtitle2">{{ item.quantity }}</span>
                  <q-btn
                    flat
                    round
                    dense
                    size="xs"
                    color="primary"
                    icon="add"
                    class="bg-red-1"
                    @click="updateQuantity(item.id, 1)"
                  />
                </div>
              </q-item-section>

              <q-item-section side top>
                <q-btn
                  flat
                  round
                  dense
                  color="grey-6"
                  icon="delete_outline"
                  @click="removeFromCart(item.id)"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <!-- Resumen y Botón de Enviar Pedido -->
        <q-card-section v-if="cartItems.length > 0" class="bg-grey-1 border-top q-pa-md">
          <!-- Formulario rápido de cliente -->
          <div class="q-mb-md">
            <q-input
              v-model="customerName"
              dense
              outlined
              label="Tu Nombre *"
              bg-color="white"
              class="q-mb-xs"
            />
            <q-input
              v-model="customerAddress"
              dense
              outlined
              label="Dirección de Entrega *"
              bg-color="white"
            />
          </div>

          <div class="row justify-between items-center text-subtitle1 q-mb-xs">
            <span class="text-grey-8">Subtotal:</span>
            <span class="text-weight-bold">{{ cartTotalFormatted }}</span>
          </div>
          <div class="row justify-between items-center text-subtitle1 q-mb-md">
            <span class="text-grey-8">Domicilio:</span>
            <span class="text-weight-bold text-positive">$ 0 COP (¡GRATIS!)</span>
          </div>
          <q-separator class="q-mb-md" />
          <div class="row justify-between items-center text-h6 text-weight-bolder text-dark q-mb-lg">
            <span>TOTAL:</span>
            <span class="text-primary">{{ cartTotalFormatted }}</span>
          </div>

          <q-btn
            unelevated
            rounded
            color="positive"
            class="full-width q-py-sm text-weight-bolder text-uppercase font-display"
            icon="whatsapp"
            label="CONFIRMAR PEDIDO POR WHATSAPP"
            @click="sendWhatsAppOrder"
          />
          <div class="text-center q-mt-xs">
            <q-btn flat dense no-caps color="grey-7" label="Vaciar Carrito" size="sm" @click="clearCart" />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Contenedor de Vista / Router View -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer Oficial Burger Bite (Basado en la imagen de referencia) -->
    <footer class="bg-dark text-white q-pt-xl q-pb-md border-top">
      <div class="q-px-md q-px-lg-xl" style="max-width: 1320px; margin: 0 auto; width: 100%;">
        <div class="row q-col-gutter-xl q-mb-xl">
          <!-- Columna 1: Marca y Redes -->
          <div class="col-12 col-md-4">
            <div class="row items-center q-mb-sm">
              <q-icon name="lunch_dining" size="36px" color="negative" class="q-mr-sm" />
              <div class="column">
                <span class="text-h5 text-weight-bolder brand-font text-white" style="line-height: 1;">BURGER</span>
                <span class="text-subtitle2 text-weight-bold brand-font text-negative" style="line-height: 1;">BITE</span>
              </div>
            </div>
            <p class="text-grey-5 q-pr-md" style="line-height: 1.6;">
              Great burgers made with quality ingredients and served with passion. Deliciosas recetas artesanales preparadas con los ingredientes más frescos del mercado.
            </p>
            <div class="row q-gutter-x-sm q-mt-md">
              <q-btn round flat color="white" icon="facebook" size="sm" class="bg-grey-9" />
              <q-btn round flat color="white" icon="photo_camera" size="sm" class="bg-grey-9" />
              <q-btn round flat color="white" icon="smart_display" size="sm" class="bg-grey-9" />
              <q-btn round flat color="white" icon="share" size="sm" class="bg-grey-9" />
            </div>
          </div>

          <!-- Columna 2: Enlaces Rápidos -->
          <div class="col-6 col-md-2">
            <div class="text-subtitle1 text-weight-bolder text-uppercase text-white q-mb-md brand-font" style="letter-spacing: 1px;">
              ENLACES
            </div>
            <ul class="q-pa-none q-ma-none no-bullets text-grey-5" style="list-style: none;">
              <li class="q-mb-xs"><router-link to="/hamburguesas" class="footer-link">Hamburguesas</router-link></li>
              <li class="q-mb-xs"><router-link to="/perros" class="footer-link">Perros Calientes</router-link></li>
              <li class="q-mb-xs"><router-link to="/pizzas" class="footer-link">Pizzas</router-link></li>
              <li class="q-mb-xs"><router-link to="/promociones" class="footer-link">Promociones</router-link></li>
              <li class="q-mb-xs"><router-link to="/nosotros" class="footer-link">Sobre Nosotros</router-link></li>
            </ul>
          </div>

          <!-- Columna 3: Categorías del Menú -->
          <div class="col-6 col-md-2">
            <div class="text-subtitle1 text-weight-bolder text-uppercase text-white q-mb-md brand-font" style="letter-spacing: 1px;">
              MENÚ
            </div>
            <ul class="q-pa-none q-ma-none no-bullets text-grey-5" style="list-style: none;">
              <li class="q-mb-xs"><router-link to="/bebidas" class="footer-link">Bebidas y Shakes</router-link></li>
              <li class="q-mb-xs"><router-link to="/postres" class="footer-link">Postres Dulces</router-link></li>
              <li class="q-mb-xs"><router-link to="/promociones" class="footer-link">Combos Especiales</router-link></li>
              <li class="q-mb-xs"><router-link to="/hamburguesas" class="footer-link">Papas & Acompañamientos</router-link></li>
            </ul>
          </div>

          <!-- Columna 4: Contacto y Horarios -->
          <div class="col-12 col-md-4">
            <div class="text-subtitle1 text-weight-bolder text-uppercase text-white q-mb-md brand-font" style="letter-spacing: 1px;">
              CONTACTO
            </div>
            <div class="column q-gutter-y-sm text-grey-5">
              <div class="row items-center">
                <q-icon name="call" size="18px" color="negative" class="q-mr-sm" />
                <span>+57 (315) 890-4321 / (601) 456-7890</span>
              </div>
              <div class="row items-center">
                <q-icon name="email" size="18px" color="negative" class="q-mr-sm" />
                <span>pedidos@burgerbite.com</span>
              </div>
              <div class="row items-start">
                <q-icon name="place" size="18px" color="negative" class="q-mr-sm q-mt-xs" />
                <span>Carrera 15 # 85-32, Zona Rosa, Bogotá, Colombia</span>
              </div>
              <div class="row items-center">
                <q-icon name="schedule" size="18px" color="negative" class="q-mr-sm" />
                <span>Lunes a Domingo: 11:30 AM - 11:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <q-separator color="grey-9" class="q-my-lg" />

        <div class="row justify-between items-center text-caption text-grey-6">
          <div>© 2026 Burger Bite. Todos los derechos reservados.</div>
          <div class="row q-gutter-x-md">
            <span>Términos y Condiciones</span>
            <span>Política de Privacidad</span>
            <span>Aviso Legal</span>
          </div>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useCart, formatCOP } from './composables/useCart.js'

const $q = useQuasar()
const leftDrawerOpen = ref(false)
const customerName = ref('')
const customerAddress = ref('')

const {
  cartItems,
  isCartOpen,
  totalItems,
  cartTotalFormatted,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
} = useCart()

// Enlaces del Menú según los requerimientos solicitados
const navMenuItems = [
  { label: 'Hamburguesas', path: '/hamburguesas', icon: 'lunch_dining' },
  { label: 'Perros', path: '/perros', icon: 'outdoor_grill' },
  { label: 'Pizzas', path: '/pizzas', icon: 'local_pizza' },
  { label: 'Bebidas', path: '/bebidas', icon: 'local_bar' },
  { label: 'Postres', path: '/postres', icon: 'icecream' },
  { label: 'Promociones', path: '/promociones', icon: 'local_offer' },
  { label: 'Nosotros', path: '/nosotros', icon: 'groups' },
]

function sendWhatsAppOrder() {
  if (!customerName.value.trim()) {
    $q.notify({
      type: 'warning',
      message: 'Por favor ingresa tu nombre para el pedido',
      icon: 'person',
    })
    return
  }
  if (!customerAddress.value.trim()) {
    $q.notify({
      type: 'warning',
      message: 'Por favor ingresa la dirección de entrega',
      icon: 'place',
    })
    return
  }

  // Armar mensaje para WhatsApp
  let message = `🍔 *NUEVO PEDIDO BURGER BITE*%0A`
  message += `👤 *Cliente:* ${encodeURIComponent(customerName.value)}%0A`
  message += `📍 *Dirección:* ${encodeURIComponent(customerAddress.value)}%0A%0A`
  message += `📋 *DETALLE DEL PEDIDO:*%0A`

  cartItems.value.forEach((item, index) => {
    message += `${index + 1}. ${item.quantity}x ${encodeURIComponent(item.name)} - ${encodeURIComponent(formatCOP(item.priceNumber * item.quantity))}`
    if (item.notes) {
      message += ` (Nota: ${encodeURIComponent(item.notes)})`
    }
    message += `%0A`
  })

  message += `%0A💰 *TOTAL A PAGAR:* ${encodeURIComponent(cartTotalFormatted.value)}%0A`
  message += `🚀 *Envío:* ¡GRATIS!%0A`
  message += `Gracias por preferir Burger Bite.`

  const whatsappUrl = `https://wa.me/573158904321?text=${message}`

  $q.notify({
    type: 'positive',
    message: '¡Generando orden para WhatsApp!',
    icon: 'check_circle',
  })

  window.open(whatsappUrl, '_blank')
  toggleCart(false)
}
</script>

<style scoped>
.brand-font {
  font-family: 'Bebas Neue', 'Montserrat', sans-serif;
  letter-spacing: 0.5px;
}

.no-decoration {
  text-decoration: none;
}

.nav-btn {
  font-size: 0.95rem;
  transition: all 0.2s ease;
  border-radius: 8px;
}

.nav-btn:hover {
  color: #B21E27 !important;
  background-color: #FFF2F2;
}

.active-nav-btn {
  color: #B21E27 !important;
  background-color: #FEE8E9;
  border-bottom: 2px solid #B21E27;
}

.order-now-btn {
  background: #B21E27 !important;
  font-size: 1rem;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 14px rgba(178, 30, 39, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.order-now-btn:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 20px rgba(178, 30, 39, 0.45);
}

.logo-icon-wrapper {
  background: #FFF2F2;
  padding: 6px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-link {
  color: #AAAAAA;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #FFFFFF;
  padding-left: 4px;
}

.border-bottom {
  border-bottom: 1px solid #ECECEC;
}

.border-top {
  border-top: 1px solid #222222;
}

.scroll-x-nowrap {
  overflow-x: auto;
  white-space: nowrap;
}
</style>
