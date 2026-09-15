<template>
  <q-page class="q-pb-xl">
    <!-- Banner Superior / Portada Postres -->
    <div class="hero-banner-container bg-white q-py-lg q-px-md q-px-lg-xl">
      <div class="hero-wrapper row items-center justify-between" style="max-width: 1320px; margin: 0 auto;">
        <div class="col-12 col-md-6 q-pr-md-xl q-mb-lg q-mb-md-none">
          <span class="text-caption text-weight-bolder text-primary text-uppercase" style="letter-spacing: 2px;">
            EL FINAL PERFECTO
          </span>

          <h1 class="text-h2 text-weight-bolder text-uppercase font-display text-dark q-my-none hero-title" style="line-height: 0.95;">
            POSTRES ARTESANALES<br />
            <span class="text-primary">&amp; DULCES CALIENTES</span>
          </h1>

          <p class="text-subtitle1 text-grey-8 q-mt-md q-mb-lg hero-subtitle" style="max-width: 520px; line-height: 1.5;">
            El cierre dulce para tu experiencia Burger Bite. Brownies melcochudos recién horneados, cheesecakes sedosos y churros crocantes con arequipe y Nutella.
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
              label="Ver Postres"
              @click="scrollToMenu"
            />
          </div>

          <div class="row items-center q-gutter-x-lg q-pt-sm text-grey-8">
            <div class="row items-center">
              <q-icon name="cake" color="primary" size="24px" class="q-mr-xs" />
              <div class="column">
                <span class="text-caption text-weight-bolder text-uppercase">Recetas de Casa</span>
                <span class="text-caption text-grey-6">Horneados cada día</span>
              </div>
            </div>
            <div class="row items-center">
              <q-icon name="whatshot" color="negative" size="24px" class="q-mr-xs" />
              <div class="column">
                <span class="text-caption text-weight-bolder text-uppercase">Servidos Tibios</span>
                <span class="text-caption text-grey-6">Con helado cremoso</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 text-center relative-position">
          <div class="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=80"
              alt="Postres y Dulces Burger Bite"
              class="hero-img"
            />
            <div class="stamp-badge stamp-badge-floating">
              <span style="font-size: 10px;">DULCE</span>
              <span style="font-size: 12px; font-weight: 900;">TENTACIÓN</span>
              <span style="font-size: 10px;">HORNEADA</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menú de Postres -->
    <div id="desserts-menu-section" class="q-px-md q-px-lg-xl q-pt-xl" style="max-width: 1320px; margin: 0 auto;">
      <div class="text-center q-mb-xl">
        <div class="row items-center justify-center q-gutter-x-sm text-primary q-mb-xs">
          <q-icon name="arrow_forward" size="18px" />
          <span class="text-subtitle1 text-weight-bolder text-uppercase font-display" style="letter-spacing: 2px;">
            SWEET FINISH
          </span>
          <q-icon name="arrow_back" size="18px" />
        </div>
        <h2 class="text-h3 text-weight-bolder text-uppercase font-display text-dark q-my-none">
          POSTRES &amp; TENTACIONES DULCES
        </h2>
        <p class="text-subtitle1 text-grey-7 q-mt-sm" style="max-width: 600px; margin-left: auto; margin-right: auto;">
          Date un gusto inolvidable con nuestras creaciones de repostería casera diseñadas para compartir o disfrutar solos.
        </p>
      </div>

      <!-- Grid de Postres -->
      <div class="row q-col-gutter-lg">
        <div
          v-for="product in desserts"
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
                    <q-icon name="favorite" size="14px" class="q-mr-xs" />
                    FAVORITO
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
                  <q-icon name="cake" size="14px" class="q-mr-xs text-primary" />
                  <span class="text-weight-medium">{{ product.ingredientsShort }}</span>
                </div>
              </q-card-section>
            </div>

            <q-card-actions class="q-px-md q-pb-md q-pt-sm row items-center justify-between">
              <div>
                <div class="text-caption text-grey-6 text-uppercase" style="font-size: 10px;">Precio</div>
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
              <div class="text-h5 text-weight-bolder text-primary q-mt-xs">
                {{ selectedProduct.priceFormatted }}
              </div>
            </div>
            <q-chip v-if="selectedProduct.isFeatured" color="red-1" text-color="primary" icon="favorite" class="text-weight-bold">
              Recomendación Especial
            </q-chip>
          </div>

          <p class="text-body2 text-grey-8 q-mt-md" style="line-height: 1.6;">
            {{ selectedProduct.fullDescription }}
          </p>

          <q-separator class="q-my-md" />

          <div class="q-mb-md">
            <div class="text-subtitle2 text-weight-bold text-uppercase text-grey-9 q-mb-xs">
              Detalle de Ingredientes:
            </div>
            <div class="row q-gutter-xs">
              <q-chip
                v-for="ing in selectedProduct.ingredientsList"
                :key="ing"
                dense
                outline
                color="grey-8"
                size="sm"
              >
                {{ ing }}
              </q-chip>
            </div>
          </div>

          <div class="q-mb-md">
            <q-input
              v-model="modalNotes"
              outlined
              dense
              placeholder="Instrucciones (ej. salsa aparte, calentar antes de empacar)"
              label="Notas para la cocina de postres"
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

const desserts = ref([
  {
    id: 'ps-1',
    name: 'Volcán Brownie Fudge con Helado',
    category: 'Postres',
    priceNumber: 15900,
    priceFormatted: '$ 15.900 COP',
    badge: 'MÁS VENDIDO',
    badgeColor: 'primary',
    isFeatured: true, // Recomendación del Chef
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    description: 'Brownie húmedo de chocolate oscuro horneado con centro líquido fudge, servido caliente con bola de helado de vainilla artesanal.',
    ingredientsShort: 'Chocolate oscuro, centro líquido, helado de vainilla, nueces',
    fullDescription: 'Nuestra perdición de chocolate más famosa. Horneado al momento con cacao al 70%, corazón derretido de salsa fudge tibia, coronado con una bola generosa de helado artesanal de vainilla y nueces tostadas.',
    ingredientsList: ['Cacao Puro al 70%', 'Centro de Chocolate Líquido', 'Bola de Helado Artesanal Vainilla', 'Nueces del Nogal Tostadas', 'Sirope de Chocolate'],
  },
  {
    id: 'ps-2',
    name: 'New York Cheesecake Frutos Rojos',
    category: 'Postres',
    priceNumber: 14500,
    priceFormatted: '$ 14.500 COP',
    badge: 'NUEVO',
    badgeColor: 'secondary',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    description: 'Clásico cheesecake horneado al estilo neoyorquino, base de galleta graham crujiente y mermelada casera de moras y arándanos.',
    ingredientsShort: 'Queso crema philadelphia, compota de frutos rojos, galleta',
    fullDescription: 'Textura sedosa, cremosa y con el balance justo de acidez y dulzor. Base crocante de galleta con mantequilla y abundante salsa casera de moras, fresas y arándanos frescos.',
    ingredientsList: ['Queso Crema Premium', 'Base Crocante de Galleta Mantequilla', 'Compota Natural de Arándanos y Moras', 'Toque de Limón'],
  },
  {
    id: 'ps-3',
    name: 'Churros Rústicos con Arequipe & Nutella',
    category: 'Postres',
    priceNumber: 13500,
    priceFormatted: '$ 13.500 COP',
    badge: 'CRUJIENTE',
    badgeColor: 'amber-9',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
    description: 'Cinco churros largos extra crujientes fritos al instante, espolvoreados con azúcar y canela, acompañados de dips de arequipe y nutella.',
    ingredientsShort: '5 churros dorados, azúcar y canela, dip arequipe y nutella',
    fullDescription: 'Crocantes por fuera y suaves por dentro. Elaborados artesanalmente al momento y pasados por una lluvia de azúcar morena con canela molida, listos para sumergir en nuestros recipientes de arequipe de leche y crema de avellanas Nutella.',
    ingredientsList: ['Masa de Churro Tradicional', 'Azúcar y Canela', 'Dip de Arequipe Colombiano', 'Dip de Nutella Original'],
  },
  {
    id: 'ps-4',
    name: 'Cookie Skillet con Chispas Gigantes',
    category: 'Postres',
    priceNumber: 14000,
    priceFormatted: '$ 14.000 COP',
    badge: 'TIBIO',
    badgeColor: 'deep-orange',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
    description: 'Galleta gigante recién salida del horno en sartén de hierro, chispas de chocolate derretidas y helado de caramelo.',
    ingredientsShort: 'Galleta gigante caliente, chispas de chocolate, helado caramelo',
    fullDescription: 'Una galleta gigante con bordes tostados y centro suave y chicloso, repleta de chispas de chocolate semiamargo derretidas y rematada con una bola de helado de caramelo.',
    ingredientsList: ['Masa de Galleta con Mantequilla', 'Chispas de Chocolate Semiamargo', 'Helado de Caramelo Salado', 'Hilos de Caramelo'],
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
  const el = document.getElementById('desserts-menu-section')
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
  background: #FFFFFF;
  z-index: 2;
  box-shadow: 0 6px 16px rgba(178, 30, 39, 0.2);
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
