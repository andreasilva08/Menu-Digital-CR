<template>
  <q-page class="q-pb-xl">
    <!-- Banner Superior / Portada Bebidas & Shakes -->
    <div class="hero-banner-container bg-white q-py-lg q-px-md q-px-lg-xl">
      <div class="hero-wrapper row items-center justify-between" style="max-width: 1320px; margin: 0 auto;">
        <div class="col-12 col-md-6 q-pr-md-xl q-mb-lg q-mb-md-none">
          <span class="text-caption text-weight-bolder text-primary text-uppercase" style="letter-spacing: 2px;">
            HELADAS &amp; CREMOSAS
          </span>

          <h1 class="text-h2 text-weight-bolder text-uppercase font-display text-dark q-my-none hero-title" style="line-height: 0.95;">
            MALTEADAS ARTESANALES<br />
            <span class="text-primary">&amp; BEBIDAS FRÍAS</span>
          </h1>

          <p class="text-subtitle1 text-grey-8 q-mt-md q-mb-lg hero-subtitle" style="max-width: 520px; line-height: 1.5;">
            El acompañante supremo para tu hamburguesa. Malteadas espesas preparadas con auténtico helado artesanal, crema chantilly fresca y siropes caseros.
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
              label="Ver Bebidas"
              @click="scrollToMenu"
            />
          </div>

          <div class="row items-center q-gutter-x-lg q-pt-sm text-grey-8">
            <div class="row items-center">
              <q-icon name="icecream" color="primary" size="24px" class="q-mr-xs" />
              <div class="column">
                <span class="text-caption text-weight-bolder text-uppercase">Helado Premium</span>
                <span class="text-caption text-grey-6">100% Leche entera</span>
              </div>
            </div>
            <div class="row items-center">
              <q-icon name="ac_unit" color="info" size="24px" class="q-mr-xs" />
              <div class="column">
                <span class="text-caption text-weight-bolder text-uppercase">Siempre Heladas</span>
                <span class="text-caption text-grey-6">Textura ultra espesa</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 text-center relative-position">
          <div class="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1000&q=80"
              alt="Malteadas Cremosas Burger Bite"
              class="hero-img"
            />
            <div class="stamp-badge stamp-badge-floating">
              <span style="font-size: 11px;">EXTRA</span>
              <span style="font-size: 12px; font-weight: 900;">THICK</span>
              <span style="font-size: 10px;">SHAKE</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menú de Bebidas -->
    <div id="drinks-menu-section" class="q-px-md q-px-lg-xl q-pt-xl" style="max-width: 1320px; margin: 0 auto;">
      <div class="text-center q-mb-xl">
        <div class="row items-center justify-center q-gutter-x-sm text-primary q-mb-xs">
          <q-icon name="arrow_forward" size="18px" />
          <span class="text-subtitle1 text-weight-bolder text-uppercase font-display" style="letter-spacing: 2px;">
            REFRESCANTES &amp; DULCES
          </span>
          <q-icon name="arrow_back" size="18px" />
        </div>
        <h2 class="text-h3 text-weight-bolder text-uppercase font-display text-dark q-my-none">
          MALTEADAS Y BEBIDAS
        </h2>
        <p class="text-subtitle1 text-grey-7 q-mt-sm" style="max-width: 600px; margin-left: auto; margin-right: auto;">
          Desde nuestras famosas malteadas espesas con toppings crocantes hasta limonadas de frutas naturales y gaseosas bien frías.
        </p>
      </div>

      <!-- Grid de Bebidas -->
      <div class="row q-col-gutter-lg">
        <div
          v-for="product in drinks"
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
                    <q-icon name="stars" size="14px" class="q-mr-xs" />
                    CHEF FAVORITE
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
                  <q-icon name="local_drink" size="14px" class="q-mr-xs text-primary" />
                  <span class="text-weight-medium">{{ product.ingredientsShort }}</span>
                </div>
              </q-card-section>
            </div>

            <q-card-actions class="q-px-md q-pb-md q-pt-sm row items-center justify-between">
              <div>
                <div class="text-caption text-grey-6 text-uppercase" style="font-size: 10px;">Precio (16 oz)</div>
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
            <q-chip v-if="selectedProduct.isFeatured" color="red-1" text-color="primary" icon="stars" class="text-weight-bold">
              Favorito de la Casa
            </q-chip>
          </div>

          <p class="text-body2 text-grey-8 q-mt-md" style="line-height: 1.6;">
            {{ selectedProduct.fullDescription }}
          </p>

          <q-separator class="q-my-md" />

          <div class="q-mb-md">
            <div class="text-subtitle2 text-weight-bold text-uppercase text-grey-9 q-mb-xs">
              Ingredientes &amp; Presentación:
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
              placeholder="Instrucciones (ej. sin chantilly, poco dulce, hielo extra)"
              label="Notas para la barra de bebidas"
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

const drinks = ref([
  {
    id: 'dr-1',
    name: 'Monster Chocolate Fudge Shake',
    category: 'Bebidas',
    priceNumber: 16500,
    priceFormatted: '$ 16.500 COP',
    badge: 'MÁS VENDIDO',
    badgeColor: 'primary',
    isFeatured: true, // Malteada insignia del Chef
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    description: 'Helado artesanal de chocolate belga, ganache fudge tibio, copete de crema chantilly fresca y virutas de cacao amargo.',
    ingredientsShort: 'Chocolate belga, fudge tibio, chantilly fresca, cacao 70%',
    fullDescription: 'Nuestra malteada más icónica, idéntica a la de la portada de Burger Bite. Tres bolas de helado artesanal de chocolate negro belga batidas lentamente con leche entera, jarabe de chocolate caliente en las paredes de la copa, montaña de chantilly casera y lluvia de chocolate amargo rallado.',
    ingredientsList: ['Helado de Chocolate Belga', 'Ganache Fudge Casero', 'Crema Chantilly Batida', 'Leche Entera Cremosa', 'Virutas de Cacao Puro'],
  },
  {
    id: 'dr-2',
    name: 'Strawberry Velvet Cream Shake',
    category: 'Bebidas',
    priceNumber: 15500,
    priceFormatted: '$ 15.500 COP',
    badge: 'NUEVO',
    badgeColor: 'secondary',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
    description: 'Helado de fresas silvestres, compota natural de frutos rojos, chantilly suave y chispas crocantes.',
    ingredientsShort: 'Fresas naturales, helado cremoso, compota casera',
    fullDescription: 'Delicadeza y frescura frutal. Batido con helado de fresa de verdad, compota casera de fresas maduras maceradas en azúcar de caña y terminada con crema chantilly y una fresa fresca.',
    ingredientsList: ['Helado de Fresa Silvestre', 'Compota Natural de Fresas', 'Crema Batida Chantilly', 'Sprinkles Crujientes'],
  },
  {
    id: 'dr-3',
    name: 'Salted Caramel & Vanilla Shake',
    category: 'Bebidas',
    priceNumber: 16000,
    priceFormatted: '$ 16.000 COP',
    badge: 'ESPECIAL',
    badgeColor: 'amber-9',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80',
    description: 'Helado de vainilla francesa de Madagascar, caramelo salado con flor de sal marina y trozos de galleta oreo.',
    ingredientsShort: 'Vainilla Madagascar, toffee salado, galleta crocante',
    fullDescription: 'El balance perfecto entre dulce y salado. Salsa toffee caliente con un toque de sal marina del Pacífico mezclada con espeso helado de vainilla en rama y galleta crocante triturada.',
    ingredientsList: ['Helado Vainilla Madagascar', 'Caramelo Salado con Flor de Sal', 'Trozos de Galleta Crocante', 'Crema Chantilly'],
  },
  {
    id: 'dr-4',
    name: 'Limonada de Coco Frappé',
    category: 'Bebidas',
    priceNumber: 11500,
    priceFormatted: '$ 11.500 COP',
    badge: 'REFRESCANTE',
    badgeColor: 'positive',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    description: 'Jugo de limones frescos recién exprimidos licuado con crema de coco caribeña y hielo frappé cremoso.',
    ingredientsShort: 'Limón fresco tahití, crema de coco, frappé helado',
    fullDescription: 'La bebida tradicional más refrescante del Caribe. Zumo natural de limón criollo batido con rica crema de coco dulce hasta obtener una consistencia cremosa, suave y ultra refrescante para equilibrar la grasa de tus comidas.',
    ingredientsList: ['Zumo de Limón Tahití', 'Crema de Coco Costeña', 'Hielo Frappé', 'Rodaja de Limón Decorativa'],
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
  const el = document.getElementById('drinks-menu-section')
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
