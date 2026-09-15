<template>
  <q-page class="q-pb-xl">
    <!-- Banner Superior / Portada Pizzas -->
    <div class="hero-banner-container bg-white q-py-lg q-px-md q-px-lg-xl">
      <div class="hero-wrapper row items-center justify-between" style="max-width: 1320px; margin: 0 auto;">
        <div class="col-12 col-md-6 q-pr-md-xl q-mb-lg q-mb-md-none">
          <span class="text-caption text-weight-bolder text-primary text-uppercase" style="letter-spacing: 2px;">
            AL HORNO A 400°C
          </span>

          <h1 class="text-h2 text-weight-bolder text-uppercase font-display text-dark q-my-none hero-title" style="line-height: 0.95;">
            PIZZAS ARTESANALES<br />
            <span class="text-primary">DE MASA MADRE</span>
          </h1>

          <p class="text-subtitle1 text-grey-8 q-mt-md q-mb-lg hero-subtitle" style="max-width: 520px; line-height: 1.5;">
            Fermentación natural de 48 horas, salsa pomodoro italiana de tomates San Marzano, queso mozzarella hilado y bordes aireados con queso gratinado.
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
              label="Ver Pizzas"
              @click="scrollToMenu"
            />
          </div>

          <div class="row items-center q-gutter-x-lg q-pt-sm text-grey-8">
            <div class="row items-center">
              <q-icon name="local_pizza" color="primary" size="24px" class="q-mr-xs" />
              <div class="column">
                <span class="text-caption text-weight-bolder text-uppercase">Horno de Piedra</span>
                <span class="text-caption text-grey-6">Crocante y tostada</span>
              </div>
            </div>
            <div class="row items-center">
              <q-icon name="hourglass_empty" color="positive" size="24px" class="q-mr-xs" />
              <div class="column">
                <span class="text-caption text-weight-bolder text-uppercase">Masa Madre</span>
                <span class="text-caption text-grey-6">48h de fermentación</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 text-center relative-position">
          <div class="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80"
              alt="Pizzas Artesanales Burger Bite"
              class="hero-img"
            />
            <div class="stamp-badge stamp-badge-floating">
              <span style="font-size: 11px;">MASA</span>
              <span style="font-size: 12px; font-weight: 900;">MADRE</span>
              <span style="font-size: 10px;">48 HORAS</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menú de Pizzas -->
    <div id="pizzas-menu-section" class="q-px-md q-px-lg-xl q-pt-xl" style="max-width: 1320px; margin: 0 auto;">
      <div class="text-center q-mb-xl">
        <div class="row items-center justify-center q-gutter-x-sm text-primary q-mb-xs">
          <q-icon name="arrow_forward" size="18px" />
          <span class="text-subtitle1 text-weight-bolder text-uppercase font-display" style="letter-spacing: 2px;">
            CLÁSICAS &amp; ESPECIALES
          </span>
          <q-icon name="arrow_back" size="18px" />
        </div>
        <h2 class="text-h3 text-weight-bolder text-uppercase font-display text-dark q-my-none">
          NUESTRAS PIZZAS AL HORNO
        </h2>
        <p class="text-subtitle1 text-grey-7 q-mt-sm" style="max-width: 600px; margin-left: auto; margin-right: auto;">
          Horneadas sobre piedra refractaria para lograr la base crocante perfecta con queso derretido elástico y aromáticas especias.
        </p>
      </div>

      <!-- Grid de Pizzas -->
      <div class="row q-col-gutter-lg">
        <div
          v-for="product in pizzas"
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
                    <q-icon name="military_tech" size="14px" class="q-mr-xs" />
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
                  <q-icon name="restaurant_menu" size="14px" class="q-mr-xs text-primary" />
                  <span class="text-weight-medium">{{ product.ingredientsShort }}</span>
                </div>
              </q-card-section>
            </div>

            <q-card-actions class="q-px-md q-pb-md q-pt-sm row items-center justify-between">
              <div>
                <div class="text-caption text-grey-6 text-uppercase" style="font-size: 10px;">Precio (Mediana)</div>
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
            <q-chip v-if="selectedProduct.isFeatured" color="red-1" text-color="primary" icon="military_tech" class="text-weight-bold">
              Favorita del Chef
            </q-chip>
          </div>

          <p class="text-body2 text-grey-8 q-mt-md" style="line-height: 1.6;">
            {{ selectedProduct.fullDescription }}
          </p>

          <q-separator class="q-my-md" />

          <div class="q-mb-md">
            <div class="text-subtitle2 text-weight-bold text-uppercase text-grey-9 q-mb-xs">
              Ingredientes de la Pizza:
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
              placeholder="Instrucciones especiales (ej. borde con queso, orégano extra)"
              label="Notas para la pizzería"
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

const pizzas = ref([
  {
    id: 'pz-1',
    name: 'Pepperoni Supreme Crunch',
    category: 'Pizzas',
    priceNumber: 28900,
    priceFormatted: '$ 28.900 COP',
    badge: 'MÁS VENDIDO',
    badgeColor: 'primary',
    isFeatured: true, // Destacada del Chef
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    description: 'Doble porción de pepperoni artesanal en rodajas crujientes, queso mozzarella fundido, albahaca fresca y toque de miel picante.',
    ingredientsShort: 'Doble pepperoni crocante, mozzarella, miel picante hot honey',
    fullDescription: 'La pizza estrella de Burger Bite. Masa madre con 48h de fermentación horneada a la piedra, doble capa de rodajas de pepperoni curado que se tuestan en forma de copa crujiente, queso mozzarella hilado y terminado con hilos de miel picante Hot Honey casera.',
    ingredientsList: ['Masa Madre Artesanal', 'Salsa Pomodoro San Marzano', 'Doble Pepperoni Curado', 'Queso Mozzarella de Búfala', 'Hojas de Albahaca Fresca', 'Hot Honey Casera'],
  },
  {
    id: 'pz-2',
    name: 'Cuatro Quesos Dorados',
    category: 'Pizzas',
    priceNumber: 31000,
    priceFormatted: '$ 31.000 COP',
    badge: 'GOURMET',
    badgeColor: 'secondary',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    description: 'Combinación cremosa de mozzarella, provolone ahumado, queso gorgonzola azul y parmesano reggiano gratinado.',
    ingredientsShort: 'Mozzarella, gorgonzola, provolone, parmesano 24m',
    fullDescription: 'Sinfonía de quesos madurados. Base blanca de crema de queso y pomodoro suave con mezcla equilibrada de mozzarella de leche entera, gorgonzola con vetas aromáticas, provolone hilado y lluvia de parmesano reggiano recién rallado.',
    ingredientsList: ['Masa Madre Fermentada', 'Queso Mozzarella', 'Queso Provolone Ahumado', 'Queso Gorgonzola Azul', 'Parmesano Reggiano', 'Aceite de Oliva Extra Virgen'],
  },
  {
    id: 'pz-3',
    name: 'Carnes BBQ & Bacon Rústica',
    category: 'Pizzas',
    priceNumber: 33500,
    priceFormatted: '$ 33.500 COP',
    badge: 'ESPECIAL',
    badgeColor: 'negative',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80',
    description: 'Carne angus molida especiada, trozos de tocineta ahumada, pepperoni, salchicha italiana y salsa barbacoa.',
    ingredientsShort: 'Carne angus, tocineta, pepperoni, salchicha italiana, BBQ',
    fullDescription: 'Creada para los amantes carnívoros. Cama abundante de carne angus sazonada, láminas crocantes de tocineta ahumada, rodajas de salchicha italiana a las hierbas, pepperoni y un espiral generoso de salsa BBQ ahumada.',
    ingredientsList: ['Masa al Horno de Piedra', 'Salsa Pomodoro BBQ', 'Carne Angus Molida', 'Tocineta Picada', 'Salchicha Italiana', 'Cebolla Morada Asada'],
  },
  {
    id: 'pz-4',
    name: 'Vegetariana Huerto & Portobello',
    category: 'Pizzas',
    priceNumber: 27500,
    priceFormatted: '$ 27.500 COP',
    badge: 'VEGETARIANA',
    badgeColor: 'positive',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    description: 'Champiñones portobello frescos, pimientos asados al fuego, aceitunas negras kalamata, cebolla morada y orégano.',
    ingredientsShort: 'Champiñones portobello, pimientos asados, aceitunas, orégano',
    fullDescription: 'Opción ligera y repleta de sabor natural. Champiñones portobello fileteados salteados al romero, pimientos dulces soasados a la llama viva, aceitunas kalamata griegas, cebolla morada fina y hojitas de orégano campesino.',
    ingredientsList: ['Masa Madre Integral Suave', 'Pomodoro San Marzano', 'Champiñones Portobello', 'Pimientos Asados', 'Aceitunas Kalamata', 'Queso Mozzarella Magro'],
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
  const el = document.getElementById('pizzas-menu-section')
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
