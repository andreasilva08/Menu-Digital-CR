<template>
  <q-page class="q-pb-xl">
    <!-- Banner Superior / Portada Perros Calientes -->
    <div class="hero-banner-container bg-white q-py-lg q-px-md q-px-lg-xl">
      <div class="hero-wrapper row items-center justify-between" style="max-width: 1320px; margin: 0 auto;">
        <div class="col-12 col-md-6 q-pr-md-xl q-mb-lg q-mb-md-none">
          <span class="text-caption text-weight-bolder text-primary text-uppercase" style="letter-spacing: 2px;">
            SABOR CALLEJERO GOURMET
          </span>

          <h1 class="text-h2 text-weight-bolder text-uppercase font-display text-dark q-my-none hero-title" style="line-height: 0.95;">
            PERROS CALIENTES<br />
            <span class="text-primary">EXTRAORDINARIOS</span>
          </h1>

          <p class="text-subtitle1 text-grey-8 q-mt-md q-mb-lg hero-subtitle" style="max-width: 520px; line-height: 1.5;">
            Salchichas artesanales tipo múnich y viena de 22cm, queso mozzarella fundido en abundancia, tocineta crujiente, ripio de papa casero y salsas de autor.
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
              label="Ver Perros"
              @click="scrollToMenu"
            />
          </div>

          <div class="row items-center q-gutter-x-lg q-pt-sm text-grey-8">
            <div class="row items-center">
              <q-icon name="outdoor_grill" color="primary" size="24px" class="q-mr-xs" />
              <div class="column">
                <span class="text-caption text-weight-bolder text-uppercase">Salchicha 22cm</span>
                <span class="text-caption text-grey-6">Ahumada y dorada</span>
              </div>
            </div>
            <div class="row items-center">
              <q-icon name="bakery_dining" color="positive" size="24px" class="q-mr-xs" />
              <div class="column">
                <span class="text-caption text-weight-bolder text-uppercase">Pan Extra Suave</span>
                <span class="text-caption text-grey-6">Vaporizado al instante</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 text-center relative-position">
          <div class="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=1000&q=80"
              alt="Perros Calientes Gourmet Burger Bite"
              class="hero-img"
            />
            <div class="stamp-badge stamp-badge-floating">
              <span style="font-size: 11px;">100%</span>
              <span style="font-size: 13px; font-weight: 900;">GOURMET</span>
              <span style="font-size: 10px;">RECIPE</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Menú de Productos: Perros Calientes -->
    <div id="hotdogs-menu-section" class="q-px-md q-px-lg-xl q-pt-xl" style="max-width: 1320px; margin: 0 auto;">
      <div class="text-center q-mb-xl">
        <div class="row items-center justify-center q-gutter-x-sm text-primary q-mb-xs">
          <q-icon name="arrow_forward" size="18px" />
          <span class="text-subtitle1 text-weight-bolder text-uppercase font-display" style="letter-spacing: 2px;">
            SELECCIÓN ESPECIAL
          </span>
          <q-icon name="arrow_back" size="18px" />
        </div>
        <h2 class="text-h3 text-weight-bolder text-uppercase font-display text-dark q-my-none">
          PERROS CALIENTES GOURMET
        </h2>
        <p class="text-subtitle1 text-grey-7 q-mt-sm" style="max-width: 600px; margin-left: auto; margin-right: auto;">
          Nuestras recetas elevan el hot dog tradicional con salchichas premium, quesos gratinados al soplete y combinaciones audaces.
        </p>
      </div>

      <!-- Grid de Perros Calientes -->
      <div class="row q-col-gutter-lg">
        <div
          v-for="product in hotdogs"
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
                    <q-icon name="star" size="14px" class="q-mr-xs" />
                    CHEF CHOICE
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
            <q-chip v-if="selectedProduct.isFeatured" color="red-1" text-color="primary" icon="star" class="text-weight-bold">
              Especial del Chef
            </q-chip>
          </div>

          <p class="text-body2 text-grey-8 q-mt-md" style="line-height: 1.6;">
            {{ selectedProduct.fullDescription }}
          </p>

          <q-separator class="q-my-md" />

          <div class="q-mb-md">
            <div class="text-subtitle2 text-weight-bold text-uppercase text-grey-9 q-mb-xs">
              Ingredientes y Toppings:
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
              placeholder="Instrucciones especiales (ej. sin cebolla, salsas aparte)"
              label="Personaliza tu perro caliente"
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

const hotdogs = ref([
  {
    id: 'dog-1',
    name: 'Perro Colombiano Tradicional',
    category: 'Perros',
    priceNumber: 15500,
    priceFormatted: '$ 15.500 COP',
    badge: 'MÁS PEDIDO',
    badgeColor: 'primary',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80',
    description: 'Salchicha americana 20cm, abundante queso mozzarella fundido, ripio de papa artesanal, salsa piña casera y huevo de codorniz.',
    ingredientsShort: 'Salchicha 20cm, queso doble, ripio de papa, salsa piña',
    fullDescription: 'El consentido de la comida rápida colombiana. Salchicha premium dorada a la plancha, montada sobre pan vaporizado, coronada con mozzarella derretido a la plancha, ripio crujiente de papa criolla, tocineta crocante y salsas de la casa: piña dulce, tártara y salsa rosada.',
    ingredientsList: ['Pan Caliente Suave', 'Salchicha Viena Premium 20cm', 'Queso Mozzarella Gratinado', 'Tocineta Picada', 'Ripio de Papa Frita', 'Salsa de Piña Casera', 'Huevo de Codorniz'],
  },
  {
    id: 'dog-2',
    name: 'Hot Dog Suizo Doble Bacon Master',
    category: 'Perros',
    priceNumber: 20900,
    priceFormatted: '$ 20.900 COP',
    badge: 'RECOMENDADO',
    badgeColor: 'negative',
    isFeatured: true, // Recomendación del Chef destacada
    image: 'https://images.unsplash.com/photo-1627054234594-52d37c44e99f?auto=format&fit=crop&w=800&q=80',
    description: 'Salchicha alemana bratwurst envuelta en tocineta ahumada crujiente, queso suizo gratinado, cebolla crisp y mostaza antigua.',
    ingredientsShort: 'Salchicha alemana, tocineta envolvente, suizo, cebolla crisp',
    fullDescription: 'Una delicia creada por nuestro chef: Salchicha alemana múnich envuelta en tiras de tocineta ahumada y frita hasta quedar extra crujiente. Cubierta con abundante queso suizo derretido con soplete, cebolla crispy dulce y salsa de mostaza a la miel Dijón.',
    ingredientsList: ['Pan Artesanal Brioche', 'Salchicha Múnich 22cm', 'Envoltura de Tocineta Ahumada', 'Queso Suizo Derretido', 'Cebolla Crispy', 'Mostaza Miel Dijon'],
  },
  {
    id: 'dog-3',
    name: 'Chili Cheese & Jalapeño Dog',
    category: 'Perros',
    priceNumber: 18500,
    priceFormatted: '$ 18.500 COP',
    badge: 'PICANTE',
    badgeColor: 'deep-orange',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=800&q=80',
    description: 'Salchicha de res a la parrilla, generosa porción de chili con carne tex-mex, queso cheddar líquido y rodajas de jalapeño.',
    ingredientsShort: 'Chili tex-mex con carne, queso cheddar líquido, jalapeños',
    fullDescription: 'Para los amantes del sabor fuerte e intenso. Salchicha de res asada al fuego, bañada en auténtico chili tex-mex de cocción lenta con frijoles negros y carne molida sazonada, baño de cheddar fundido y toque picante de jalapeños encurtidos.',
    ingredientsList: ['Pan Tipo Baguette Suave', 'Salchicha de Res Asada', 'Chili con Carne Casero', 'Queso Cheddar Fundido', 'Jalapeños en Rodajas', 'Cilantro Picado'],
  },
  {
    id: 'dog-4',
    name: 'Pulled Pork & BBQ Dog',
    category: 'Perros',
    priceNumber: 19800,
    priceFormatted: '$ 19.800 COP',
    badge: 'NUEVO',
    badgeColor: 'secondary',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1599021456807-25db0f974333?auto=format&fit=crop&w=800&q=80',
    description: 'Salchicha ahumada cubierta con bondiola de cerdo desmechada en salsa BBQ al humo de roble y ensalada coleslaw fresca.',
    ingredientsShort: 'Cerdo desmechado BBQ, salchicha ahumada, coleslaw crujiente',
    fullDescription: 'Combinación monumental de carne desmechada de cerdo cocinada 8 horas a baja temperatura con humo de leña, glaseada con salsa BBQ artesanal, montada sobre salchicha ahumada y refrescante ensalada coleslaw de repollo y zanahoria.',
    ingredientsList: ['Pan Especial Brioche', 'Salchicha Ahumada Artesanal', 'Pulled Pork BBQ', 'Ensalada Coleslaw', 'Pepinillos Encurtidos'],
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
  const el = document.getElementById('hotdogs-menu-section')
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
