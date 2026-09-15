<template>
  <q-page class="q-pb-xl">
    <!-- Banner Superior / Portada Estilo Burger Bite -->
    <div class="hero-banner-container bg-white q-py-lg q-px-md q-px-lg-xl">
      <div class="hero-wrapper row items-center justify-between" style="max-width: 1320px; margin: 0 auto;">
        <!-- Columna de Texto Principal -->
        <div class="col-12 col-md-6 q-pr-md-xl q-mb-lg q-mb-md-none">
          <div class="row items-center q-gutter-x-xs q-mb-sm">
            <span class="text-caption text-weight-bolder text-primary text-uppercase" style="letter-spacing: 2px;">
              GOOD FOOD. GOOD MOOD.
            </span>
          </div>

          <h1 class="text-h2 text-weight-bolder text-uppercase font-display text-dark q-my-none hero-title" style="line-height: 0.95;">
            BIGGER BITES,<br />
            <span class="text-primary">BETTER TIMES!</span>
          </h1>

          <p class="text-subtitle1 text-grey-8 q-mt-md q-mb-lg hero-subtitle" style="max-width: 520px; line-height: 1.5;">
            Hamburguesas 100% carne angus a la parrilla, pan brioche recién horneado, papas crujientes y salsas secretas de la casa.
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
              label="Ver Menú"
              @click="scrollToMenu"
            />
          </div>

          <!-- Sellos de Calidad / Features de la marca -->
          <div class="row items-center q-gutter-x-lg q-pt-sm text-grey-8">
            <div class="row items-center">
              <q-icon name="local_fire_department" color="primary" size="24px" class="q-mr-xs" />
              <div class="column">
                <span class="text-caption text-weight-bolder text-uppercase">A la Parrilla</span>
                <span class="text-caption text-grey-6">Carne 100% Angus</span>
              </div>
            </div>
            <div class="row items-center">
              <q-icon name="eco" color="positive" size="24px" class="q-mr-xs" />
              <div class="column">
                <span class="text-caption text-weight-bolder text-uppercase">Ingredientes</span>
                <span class="text-caption text-grey-6">Siempre Frescos</span>
              </div>
            </div>
            <div class="row items-center">
              <q-icon name="delivery_dining" color="primary" size="24px" class="q-mr-xs" />
              <div class="column">
                <span class="text-caption text-weight-bolder text-uppercase">Envío Rápido</span>
                <span class="text-caption text-grey-6">En 30 minutos</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna Imagen Portada con Stamp Badge -->
        <div class="col-12 col-md-6 text-center relative-position">
          <div class="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80"
              alt="Burger Bite Hamburguesa Principal"
              class="hero-img"
            />
            <!-- Insignia Circular Estilo Burger Bite -->
            <div class="stamp-badge stamp-badge-floating">
              <span style="font-size: 11px;">100%</span>
              <span style="font-size: 13px; font-weight: 900;">FRESH &amp;</span>
              <span style="font-size: 11px;">TASTY</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de Productos / Menú de Hamburguesas -->
    <div id="burger-menu-section" class="q-px-md q-px-lg-xl q-pt-xl" style="max-width: 1320px; margin: 0 auto;">
      <div class="text-center q-mb-xl">
        <div class="row items-center justify-center q-gutter-x-sm text-primary q-mb-xs">
          <q-icon name="arrow_forward" size="18px" />
          <span class="text-subtitle1 text-weight-bolder text-uppercase font-display" style="letter-spacing: 2px;">
            TOP PICKS
          </span>
          <q-icon name="arrow_back" size="18px" />
        </div>
        <h2 class="text-h3 text-weight-bolder text-uppercase font-display text-dark q-my-none">
          NUESTRAS HAMBURGUESAS ARTESANALES
        </h2>
        <p class="text-subtitle1 text-grey-7 q-mt-sm" style="max-width: 600px; margin-left: auto; margin-right: auto;">
          Elaboradas con mezclas exclusivas de cortes seleccionados, queso fundido, vegetales crujientes y pan artesanal sellado con mantequilla.
        </p>
      </div>

      <!-- Grid de Tarjetas de Productos -->
      <div class="row q-col-gutter-lg">
        <div
          v-for="product in burgers"
          :key="product.id"
          class="col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <q-card
            class="burger-card column justify-between full-height cursor-pointer"
            :class="{ 'burger-card-featured': product.isFeatured }"
            @click="openProductDetail(product)"
          >
            <div>
              <!-- Imagen del Producto con Badges -->
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

                <!-- Badge Superior Izquierdo -->
                <div v-if="product.badge" class="absolute-top-left q-ma-sm">
                  <q-badge
                    :color="product.badgeColor || 'primary'"
                    text-color="white"
                    class="q-px-sm q-py-xs text-weight-bolder text-uppercase font-display"
                    style="border-radius: 6px; font-size: 11px; letter-spacing: 0.5px;"
                  >
                    {{ product.badge }}
                  </q-badge>
                </div>

                <!-- Insignia Recomendación del Chef -->
                <div v-if="product.isFeatured" class="absolute-top-right q-ma-sm">
                  <q-badge
                    color="dark"
                    text-color="warning"
                    class="q-px-sm q-py-xs text-weight-bold"
                    style="border-radius: 6px; font-size: 11px;"
                  >
                    <q-icon name="military_tech" size="14px" class="q-mr-xs" />
                    RECOMENDADO
                  </q-badge>
                </div>
              </div>

              <!-- Información del Producto -->
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

            <!-- Precio y Botón de Acción -->
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

      <!-- Banner Promocional "MAKE IT A PERFECT COMBO" inspirado en la imagen -->
      <div class="combo-promo-banner q-mt-xl q-pa-lg q-pa-md-xl rounded-borders text-white">
        <div class="row items-center justify-between">
          <div class="col-12 col-md-4 text-center text-md-left q-mb-md q-mb-md-none">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
              alt="Combo Burger Bite"
              class="combo-promo-img"
            />
          </div>
          <div class="col-12 col-md-5 text-center text-md-left q-mb-md q-mb-md-none">
            <div class="text-caption text-weight-bolder text-uppercase" style="letter-spacing: 2px;">
              MAKE IT A
            </div>
            <div class="text-h3 text-weight-bolder text-uppercase font-display q-my-xs">
              PERFECT COMBO!
            </div>
            <p class="text-subtitle1 text-grey-3 q-mb-md">
              Añade papas a la francesa y gaseosa fría a cualquiera de tus hamburguesas por un precio insuperable.
            </p>
            <q-btn
              unelevated
              rounded
              color="white"
              text-color="primary"
              label="VER COMBOS Y PROMOCIONES"
              to="/promociones"
              class="text-weight-bolder font-display text-uppercase q-px-lg"
              icon-right="arrow_forward"
            />
          </div>
          <div class="col-12 col-md-3 text-center">
            <div class="promo-discount-badge">
              <span class="text-caption text-uppercase text-weight-bold">AHORRA HASTA</span>
              <span class="text-h3 text-weight-bolder font-display">20%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal / Dialog de Detalles del Producto -->
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
              Elección del Chef
            </q-chip>
          </div>

          <p class="text-body2 text-grey-8 q-mt-md" style="line-height: 1.6;">
            {{ selectedProduct.fullDescription }}
          </p>

          <q-separator class="q-my-md" />

          <!-- Ingredientes detallados -->
          <div class="q-mb-md">
            <div class="text-subtitle2 text-weight-bold text-uppercase text-grey-9 q-mb-xs">
              Ingredientes Incluidos:
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

          <!-- Opciones adicionales o notas -->
          <div class="q-mb-md">
            <q-input
              v-model="modalNotes"
              outlined
              dense
              placeholder="Instrucciones especiales (ej. sin cebolla, salsa aparte)"
              label="Notas para la cocina"
            />
          </div>

          <!-- Selector de Cantidad -->
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

        <!-- Acciones del Modal -->
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

// Catálogo de Hamburguesas (Mínimo 4 productos con recomendación del chef y fotos Unsplash reales)
const burgers = ref([
  {
    id: 'hb-1',
    name: 'Classic Beef Burger',
    category: 'Hamburguesas',
    priceNumber: 18900,
    priceFormatted: '$ 18.900 COP',
    badge: 'MÁS VENDIDO',
    badgeColor: 'primary',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    description: 'Carne jugosa 150g, queso cheddar fundido, lechuga fresca, tomate, cebolla caramelizada y salsa tártara especial.',
    ingredientsShort: 'Carne 150g, cheddar, vegetales, salsa especial',
    fullDescription: 'Nuestra clásica e inconfundible hamburguesa de la casa. Carne 100% de res seleccionada a la parrilla, doble lonja de queso cheddar fundido, crujiente lechuga crespa, rodajas de tomate fresco de finca, cebolla parrillada y nuestra secreta salsa Burger Bite en pan brioche.',
    ingredientsList: ['Pan Brioche Artesanal', 'Carne Angus 150g', 'Doble Queso Cheddar', 'Cebolla Caramelizada', 'Tomate Fresco', 'Lechuga Crespa', 'Salsa Especial de la Casa'],
  },
  {
    id: 'hb-2',
    name: 'Spicy Crispy Chicken',
    category: 'Hamburguesas',
    priceNumber: 21500,
    priceFormatted: '$ 21.500 COP',
    badge: 'PICANTE',
    badgeColor: 'deep-orange',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
    description: 'Pechuga de pollo extra crocante marinada en especias, mayonesa ahumada, pepinillos encurtidos y ensalada coleslaw.',
    ingredientsShort: 'Pollo crujiente, salsa spicy, pepinillos dulces',
    fullDescription: 'Crujiente y jugosa pechuga de pollo marinada 24 horas en suero de mantequilla y especias picantes, rebozado estilo sureño, acompañada de pepinillos dulces, ensalada coleslaw fresca y mayonesa chipotle.',
    ingredientsList: ['Pechuga Apanada 180g', 'Coleslaw Tradicional', 'Pepinillos Dulces Encurtidos', 'Mayonesa Chipotle', 'Pan Sésamo Tostado'],
  },
  {
    id: 'hb-3',
    name: 'Monster Bacon BBQ Master',
    category: 'Hamburguesas',
    priceNumber: 27900,
    priceFormatted: '$ 27.900 COP',
    badge: 'CHEF CHOICE',
    badgeColor: 'negative',
    isFeatured: true, // Recomendación del Chef con diseño destacado
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    description: 'Doble carne angus (300g), triple tocineta ahumada crujiente, aros de cebolla crocantes y reducción BBQ al bourbon.',
    ingredientsShort: 'Doble carne 300g, triple tocineta, BBQ bourbon',
    fullDescription: 'La creación insignia del Chef Ejecutivo de Burger Bite. Dos medallones de res angus de 150g cada uno asados al carbón, láminas de tocineta ahumada crujiente en tiras gruesas, aros de cebolla apanados, doble queso monterrey jack y baño generoso de salsa BBQ bourbon artesanal.',
    ingredientsList: ['Doble Carne Angus 300g', 'Triple Tocineta Ahumada', 'Aros de Cebolla Crocantes', 'Queso Monterrey Jack', 'Salsa BBQ Bourbon', 'Pan Brioche Dorado con Mantequilla'],
  },
  {
    id: 'hb-4',
    name: 'Truffle & Mushroom Melt',
    category: 'Hamburguesas',
    priceNumber: 24500,
    priceFormatted: '$ 24.500 COP',
    badge: 'NUEVO',
    badgeColor: 'secondary',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    description: 'Carne angus 180g, salteado de champiñones al ajillo y romero, queso suizo emmental derretido y alioli trufado.',
    ingredientsShort: 'Carne 180g, champiñones, suizo, alioli de trufa',
    fullDescription: 'Una experiencia gourmet insuperable. Medallón de carne angus 180g bañado en queso suizo emmental, mezcla de champiñones portobello salteados al vino blanco y alioli con esencia de trufas negras.',
    ingredientsList: ['Carne Angus 180g', 'Champiñones Portobello', 'Queso Emmental Suizo', 'Alioli de Trufa Negra', 'Rúgula Fresca', 'Pan Artesanal'],
  },
  {
    id: 'hb-5',
    name: 'Guacamole & Nacho Crunch',
    category: 'Hamburguesas',
    priceNumber: 23000,
    priceFormatted: '$ 23.000 COP',
    badge: 'ESPECIAL',
    badgeColor: 'positive',
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80',
    description: 'Carne a la parrilla, guacamole rústico fresco, totopos de maíz crujientes, pico de gallo y queso cheddar suave.',
    ingredientsShort: 'Guacamole casero, nachos, queso fundido',
    fullDescription: 'Fusión de texturas y sabor mexicano-americano. Carne jugosa sobre cama de totopos crocantes de maíz, guacamole rústico hecho al momento, pico de gallo y crema agria.',
    ingredientsList: ['Carne Res 160g', 'Guacamole Rústico Casero', 'Totopos de Maíz', 'Pico de Gallo', 'Queso Cheddar Fundido'],
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
  const el = document.getElementById('burger-menu-section')
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
  max-width: 540px;
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

.combo-promo-banner {
  background: linear-gradient(135deg, #B21E27 0%, #7E1218 100%);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(178, 30, 39, 0.3);
}

.combo-promo-img {
  max-width: 280px;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
}

.promo-discount-badge {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #FFFFFF;
  color: #B21E27;
  border: 3px dashed #B21E27;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.bg-dark-semi {
  background: rgba(0, 0, 0, 0.6) !important;
}
</style>
