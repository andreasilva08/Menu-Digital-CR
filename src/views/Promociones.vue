<template>
  <q-page class="q-pb-xl">
    <!-- Banner Superior / Portada de Promociones (Inspirado en MAKE IT A PERFECT COMBO) -->
    <div class="hero-banner-container bg-white q-py-lg q-px-md q-px-lg-xl">
      <div class="hero-wrapper row items-center justify-between" style="max-width: 1320px; margin: 0 auto;">
        <div class="col-12 col-md-6 q-pr-md-xl q-mb-lg q-mb-md-none">
          <span class="text-caption text-weight-bolder text-primary text-uppercase" style="letter-spacing: 2px;">
            AHORRA HASTA UN 25%
          </span>

          <h1 class="text-h2 text-weight-bolder text-uppercase font-display text-dark q-my-none hero-title" style="line-height: 0.95;">
            COMBOS MONUMENTALES<br />
            <span class="text-primary">&amp; PROMOCIONES DEL DÍA</span>
          </h1>

          <p class="text-subtitle1 text-grey-8 q-mt-md q-mb-lg hero-subtitle" style="max-width: 520px; line-height: 1.5;">
            Diseñados para compartir o comer en grande. Disfruta de nuestras mejores hamburguesas, perros y pizzas en combos con papas crujientes y bebidas frías a precio especial.
          </p>

          <div class="row items-center q-gutter-sm q-mb-lg">
            <q-btn
              unelevated
              rounded
              color="primary"
              size="lg"
              class="q-px-xl text-weight-bolder text-uppercase font-display"
              label="PEDIR AHORA"
              icon-right="arrow_forward"
              @click="toggleCart(true)"
            />
            <q-btn
              outline
              rounded
              color="grey-9"
              size="lg"
              class="q-px-lg text-weight-bold"
              label="Ver Combos"
              @click="scrollToMenu"
            />
          </div>

          <div class="row items-center q-gutter-x-lg q-pt-sm text-grey-8">
            <div class="row items-center">
              <q-icon name="savings" color="positive" size="24px" class="q-mr-xs" />
              <div class="column">
                <span class="text-caption text-weight-bolder text-uppercase">Mayor Ahorro</span>
                <span class="text-caption text-grey-6">Precios de paquete</span>
              </div>
            </div>
            <div class="row items-center">
              <q-icon name="celebration" color="primary" size="24px" class="q-mr-xs" />
              <div class="column">
                <span class="text-caption text-weight-bolder text-uppercase">Para Compartir</span>
                <span class="text-caption text-grey-6">Porciones abundantes</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 text-center relative-position">
          <div class="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=1000&q=80"
              alt="Combos Especiales Burger Bite"
              class="hero-img"
            />
            <div class="stamp-badge stamp-badge-floating stamp-badge-red">
              <span style="font-size: 10px;">SAVE UP TO</span>
              <span style="font-size: 16px; font-weight: 900;">25%</span>
              <span style="font-size: 10px;">OFF</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menú de Combos y Promociones -->
    <div id="promos-menu-section" class="q-px-md q-px-lg-xl q-pt-xl" style="max-width: 1320px; margin: 0 auto;">
      <div class="text-center q-mb-xl">
        <div class="row items-center justify-center q-gutter-x-sm text-primary q-mb-xs">
          <q-icon name="arrow_forward" size="18px" />
          <span class="text-subtitle1 text-weight-bolder text-uppercase font-display" style="letter-spacing: 2px;">
            OFERTAS ACTIVAS
          </span>
          <q-icon name="arrow_back" size="18px" />
        </div>
        <h2 class="text-h3 text-weight-bolder text-uppercase font-display text-dark q-my-none">
          COMBOS Y PROMOCIONES IMPERDIBLES
        </h2>
        <p class="text-subtitle1 text-grey-7 q-mt-sm" style="max-width: 600px; margin-left: auto; margin-right: auto;">
          Aprovecha nuestros paquetes promocionales con descuentos automáticos incluidos en el precio.
        </p>
      </div>

      <!-- Grid de Promociones -->
      <div class="row q-col-gutter-lg">
        <div
          v-for="product in promos"
          :key="product.id"
          class="col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <q-card
            class="burger-card column justify-between full-height cursor-pointer"
            :class="{ 'burger-card-featured': product.isFeatured }"
            @click="openProductDetail(product)"
          >
            <div>
              <div class="relative-position overflow-hidden" style="height: 220px; background: #fdfaf6;">
                <q-img
                  :src="product.image"
                  :alt="product.name"
                  height="220px"
                  fit="cover"
                  loading="lazy"
                  class="product-card-img"
                >
                  <template v-slot:loading>
                    <div class="text-primary text-center">
                      <q-spinner-dots size="40px" />
                    </div>
                  </template>
                </q-img>

                <div v-if="product.badge" class="absolute-top-left q-ma-sm">
                  <q-badge
                    :color="product.badgeColor || 'primary'"
                    text-color="white"
                    class="q-px-sm q-py-xs text-weight-bolder text-uppercase font-display"
                    style="border-radius: 6px; font-size: 11px;"
                  >
                    {{ product.badge }}
                  </q-badge>
                </div>

                <div v-if="product.isFeatured" class="absolute-top-right q-ma-sm">
                  <q-badge
                    color="dark"
                    text-color="warning"
                    class="q-px-sm q-py-xs text-weight-bold"
                    style="border-radius: 6px; font-size: 11px;"
                  >
                    <q-icon name="local_fire_department" size="14px" class="q-mr-xs" />
                    MEGA COMBO
                  </q-badge>
                </div>
              </div>

              <q-card-section class="q-pb-none">
                <h3 class="text-h6 text-weight-bolder text-dark font-display text-uppercase q-my-none" style="letter-spacing: 0.5px;">
                  {{ product.name }}
                </h3>
                <p class="text-caption text-grey-7 q-mt-xs q-mb-sm text-description" style="line-height: 1.4; height: 38px;">
                  {{ product.description }}
                </p>
                <div class="text-caption text-grey-6 q-mb-xs">
                  <q-icon name="local_offer" size="14px" class="q-mr-xs text-primary" />
                  <span class="text-weight-medium">{{ product.ingredientsShort }}</span>
                </div>
              </q-card-section>
            </div>

            <q-card-actions class="q-px-md q-pb-md q-pt-sm row items-center justify-between">
              <div>
                <div class="text-caption text-grey-6 text-uppercase" style="font-size: 10px;">
                  <span class="text-strike q-mr-xs">{{ product.originalPriceFormatted }}</span>
                  <span class="text-positive text-weight-bold">PROMO</span>
                </div>
                <div class="text-h6 text-weight-bolder text-primary">
                  {{ product.priceFormatted }}
                </div>
              </div>
              <q-btn
                round
                unelevated
                color="primary"
                icon="add"
                size="md"
                class="add-quick-btn"
                @click.stop="quickAddToCart(product)"
              >
                <q-tooltip>Agregar al pedido</q-tooltip>
              </q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Modal / Dialog de Detalles -->
    <q-dialog v-model="detailDialogOpen">
      <q-card v-if="selectedProduct" class="detail-dialog-card" style="width: 550px; max-width: 95vw; border-radius: 16px;">
        <div class="relative-position">
          <q-img :src="selectedProduct.image" height="260px" fit="cover" />
          <q-btn
            round
            dense
            flat
            color="white"
            icon="close"
            class="absolute-top-right q-ma-sm bg-dark-semi"
            v-close-popup
          />
          <div v-if="selectedProduct.badge" class="absolute-bottom-left q-ma-md">
            <q-badge :color="selectedProduct.badgeColor || 'primary'" class="q-px-sm q-py-xs text-weight-bold text-uppercase">
              {{ selectedProduct.badge }}
            </q-badge>
          </div>
        </div>

        <q-card-section class="q-pa-lg">
          <div class="row justify-between items-start">
            <div>
              <h2 class="text-h5 text-weight-bolder text-dark font-display text-uppercase q-my-none">
                {{ selectedProduct.name }}
              </h2>
              <div class="row items-center q-gutter-x-sm q-mt-xs">
                <span class="text-h5 text-weight-bolder text-primary">
                  {{ selectedProduct.priceFormatted }}
                </span>
                <span class="text-strike text-grey-6 text-subtitle1">
                  {{ selectedProduct.originalPriceFormatted }}
                </span>
              </div>
            </div>
            <q-chip v-if="selectedProduct.isFeatured" color="red-1" text-color="primary" icon="local_fire_department" class="text-weight-bold">
              Oferta Estrella
            </q-chip>
          </div>

          <p class="text-body2 text-grey-8 q-mt-md" style="line-height: 1.6;">
            {{ selectedProduct.fullDescription }}
          </p>

          <q-separator class="q-my-md" />

          <div class="q-mb-md">
            <div class="text-subtitle2 text-weight-bold text-uppercase text-grey-9 q-mb-xs">
              Qué incluye este combo:
            </div>
            <div class="row q-gutter-xs">
              <q-chip
                v-for="item in selectedProduct.includedItems"
                :key="item"
                dense
                color="red-1"
                text-color="primary"
                icon="check_circle"
                size="sm"
              >
                {{ item }}
              </q-chip>
            </div>
          </div>

          <div class="q-mb-md">
            <q-input
              v-model="modalNotes"
              outlined
              dense
              placeholder="Sabores de gaseosa o salsas deseadas"
              label="Especificaciones del combo"
            />
          </div>

          <div class="row items-center justify-between q-mt-lg">
            <div class="row items-center q-gutter-x-sm">
              <span class="text-weight-bold text-subtitle2">Cantidad:</span>
              <q-btn
                round
                dense
                flat
                icon="remove"
                color="dark"
                class="bg-grey-3"
                @click="modalQuantity > 1 ? modalQuantity-- : null"
              />
              <span class="text-h6 text-weight-bolder q-px-sm">{{ modalQuantity }}</span>
              <q-btn
                round
                dense
                flat
                icon="add"
                color="primary"
                class="bg-red-1"
                @click="modalQuantity++"
              />
            </div>

            <div class="text-right">
              <span class="text-caption text-grey-7">Subtotal:</span>
              <div class="text-h6 text-weight-bolder text-primary">
                {{ formatCOP(selectedProduct.priceNumber * modalQuantity) }}
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-actions class="q-pa-lg q-pt-none bg-grey-1">
          <q-btn
            unelevated
            rounded
            color="primary"
            class="full-width q-py-sm text-weight-bolder text-uppercase font-display"
            icon="add_shopping_cart"
            label="AGREGAR AL PEDIDO"
            @click="addProductFromModal"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useCart, formatCOP } from '../composables/useCart.js'

const $q = useQuasar()
const { addToCart, toggleCart } = useCart()

const detailDialogOpen = ref(false)
const selectedProduct = ref(null)
const modalQuantity = ref(1)
const modalNotes = ref('')

const promos = ref([
  {
    id: 'pr-1',
    name: 'Combo Dúo Burger Parejas',
    category: 'Promociones',
    priceNumber: 39900,
    priceFormatted: '$ 39.900 COP',
    originalPriceFormatted: '$ 49.500 COP',
    badge: 'AHORRA 20%',
    badgeColor: 'primary',
    isFeatured: true, // Recomendación del Chef destacada
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    description: '2 Hamburguesas Classic Beef con queso, 2 porciones de papas francesas crujientes y 2 gaseosas heladas 400ml.',
    ingredientsShort: '2 Classic Beef + 2 Papas + 2 Bebidas',
    fullDescription: 'El combo favorito para compartir de a dos. Incluye dos jugosas Classic Beef Burgers de 150g con queso cheddar y vegetales, dos porciones medianas de papas a la francesa con sazón especial Burger Bite y dos gaseosas de 400ml a tu elección.',
    includedItems: ['2 Hamburguesas Classic Beef 150g', '2 Papas Francesas Medianas', '2 Gaseosas Heladas 400ml', 'Salsas de la Casa'],
  },
  {
    id: 'pr-2',
    name: 'Mega Fiesta Cuatro Amigos',
    category: 'Promociones',
    priceNumber: 79900,
    priceFormatted: '$ 79.900 COP',
    originalPriceFormatted: '$ 99.000 COP',
    badge: 'AHORRA 25%',
    badgeColor: 'negative',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    description: '4 Hamburguesas mixtas a elección, canastilla gigante de Loaded Fries con queso y tocineta, más 1 botella de gaseosa 1.5L.',
    ingredientsShort: '4 Burgers + Loaded Fries Gigante + Gaseosa 1.5L',
    fullDescription: 'El paquete definitivo para celebrar con amigos o en familia. Elige entre Classic Beef o Spicy Chicken, acompañado de nuestra bandeja más grande de papas cargadas con salsa de queso y tocineta picada, y gaseosa de 1.5 litros.',
    includedItems: ['4 Hamburguesas a Elección', '1 Canastilla Loaded Fries Gigante', '1 Gaseosa 1.5 Litros', 'Dips de Salsa Tártara y BBQ'],
  },
  {
    id: 'pr-3',
    name: 'Combo Perro Suizo Master + Shake',
    category: 'Promociones',
    priceNumber: 31500,
    priceFormatted: '$ 31.500 COP',
    originalPriceFormatted: '$ 37.400 COP',
    badge: 'GOURMET COMBO',
    badgeColor: 'secondary',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1627054234594-52d37c44e99f?auto=format&fit=crop&w=800&q=80',
    description: '1 Hot Dog Suizo Doble Bacon, porción de aros de cebolla crocantes y 1 Malteada Monster Chocolate Fudge.',
    ingredientsShort: '1 Hot Dog Suizo + Aros de Cebolla + 1 Malteada',
    fullDescription: 'Para quienes buscan la máxima indulgencia: Salchicha alemana envuelta en tocineta crocante y queso suizo fundido, con aros de cebolla apanados y nuestra icónica malteada espesa de chocolate belga.',
    includedItems: ['1 Perro Suizo Doble Bacon Master', '1 Porción Aros de Cebolla (6 und)', '1 Malteada Monster Chocolate Fudge 16oz'],
  },
  {
    id: 'pr-4',
    name: 'Combo Pizza Familiar + Brownie Volcán',
    category: 'Promociones',
    priceNumber: 42900,
    priceFormatted: '$ 42.900 COP',
    originalPriceFormatted: '$ 49.800 COP',
    badge: 'FIN DE SEMANA',
    badgeColor: 'amber-9',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    description: '1 Pizza Grande de 8 porciones (Pepperoni o Cuatro Quesos) + 1 Volcán Brownie con helado para compartir.',
    ingredientsShort: '1 Pizza Grande 8 Porciones + 1 Volcán Brownie',
    fullDescription: 'Cena completa lista para tu mesa. Pizza horneada a la piedra de masa madre con 8 porciones crujientes, rematada con nuestro volcán de brownie caliente bañado en fudge y helado de vainilla.',
    includedItems: ['1 Pizza Familiar de 8 Porciones', '1 Postre Volcán Brownie con Helado', 'Salsa de Ajo y Orégano'],
  },
])

function openProductDetail(product) {
  selectedProduct.value = product
  modalQuantity.value = 1
  modalNotes.value = ''
  detailDialogOpen.value = true
}

function quickAddToCart(product) {
  addToCart(product, 1)
  $q.notify({
    type: 'positive',
    message: `¡${product.name} agregado al pedido!`,
    icon: 'check_circle',
    caption: product.priceFormatted,
  })
}

function addProductFromModal() {
  if (!selectedProduct.value) return
  addToCart(selectedProduct.value, modalQuantity.value, modalNotes.value)
  $q.notify({
    type: 'positive',
    message: `¡${modalQuantity.value}x ${selectedProduct.value.name} agregado al pedido!`,
    icon: 'check_circle',
  })
  detailDialogOpen.value = false
}

function scrollToMenu() {
  const el = document.getElementById('promos-menu-section')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-banner-container {
  border-bottom: 1px solid #EEEEEE;
  background: radial-gradient(circle at 80% 20%, #FFF5F5 0%, #FFFFFF 70%);
}

.hero-image-wrapper {
  position: relative;
  display: inline-block;
}

.hero-img {
  width: 100%;
  max-width: 520px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  object-fit: cover;
}

.stamp-badge-floating {
  position: absolute;
  top: -15px;
  left: -15px;
  z-index: 2;
  box-shadow: 0 6px 16px rgba(178, 30, 39, 0.3);
}

.product-card-img {
  transition: transform 0.4s ease;
}

.burger-card:hover .product-card-img {
  transform: scale(1.06);
}

.text-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.add-quick-btn {
  background: #B21E27 !important;
  transition: transform 0.2s ease;
}

.add-quick-btn:hover {
  transform: scale(1.1);
}

.bg-dark-semi {
  background: rgba(0, 0, 0, 0.6) !important;
}
</style>
