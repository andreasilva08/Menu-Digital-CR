<template>
  <q-page class="q-pb-xl">
    <!-- Portada / Header de la Sección Nosotros -->
    <div class="about-hero bg-white q-py-xl q-px-md q-px-lg-xl border-bottom">
      <div class="row items-center justify-between" style="max-width: 1320px; margin: 0 auto;">
        <div class="col-12 col-md-6 q-pr-md-xl q-mb-xl q-mb-md-none">
          <div class="row items-center q-gutter-x-xs q-mb-sm">
            <q-icon name="storefront" color="primary" size="20px" />
            <span class="text-caption text-weight-bolder text-primary text-uppercase" style="letter-spacing: 2px;">
              NUESTRA PASIÓN CULINARIA
            </span>
          </div>

          <h1 class="text-h2 text-weight-bolder text-uppercase font-display text-dark q-my-none" style="line-height: 0.95;">
            LA HISTORIA DETRÁS DE<br />
            <span class="text-primary">BURGER BITE</span>
          </h1>

          <p class="text-subtitle1 text-grey-8 q-mt-md" style="line-height: 1.6;">
            Nacimos en 2018 con una misión simple pero contundente: transformar la comida rápida en una experiencia de alta cocina accesible, honesta y llena de sabor memorable.
          </p>

          <p class="text-body1 text-grey-7 q-mb-lg" style="line-height: 1.6;">
            Cada una de nuestras hamburguesas, perros y pizzas se prepara al instante utilizando carnes 100% colombianas de res angus seleccionada, pan brioche horneado todas las madrugadas en nuestra propia panadería y quesos madurados sin aditivos artificiales.
          </p>

          <div class="row items-center q-gutter-sm">
            <q-btn
              unelevated
              rounded
              color="positive"
              icon="chat"
              size="lg"
              class="q-px-xl text-weight-bolder text-uppercase font-display"
              label="PEDIR POR WHATSAPP"
              href="https://wa.me/573158904321?text=Hola%20Burger%20Bite!%20Quiero%20hacer%20un%20pedido"
              target="_blank"
            />
            <q-btn
              outline
              rounded
              color="primary"
              size="lg"
              class="q-px-lg text-weight-bold"
              label="Ver el Menú"
              to="/hamburguesas"
            />
          </div>
        </div>

        <div class="col-12 col-md-6 text-center">
          <div class="about-image-stack relative-position">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
              alt="Restaurante Burger Bite y Cocina"
              class="about-main-img"
            />
            <div class="experience-card bg-primary text-white q-pa-md rounded-borders shadow-3">
              <span class="text-h4 text-weight-bolder font-display">+8 AÑOS</span>
              <span class="text-caption text-uppercase text-weight-bold" style="letter-spacing: 0.5px;">
                DE EXCELENCIA Y SABOR
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de Valores y Pilares -->
    <div class="q-px-md q-px-lg-xl q-py-xl" style="max-width: 1320px; margin: 0 auto;">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-4">
          <q-card class="burger-card q-pa-lg text-center full-height">
            <q-avatar size="68px" color="red-1" text-color="primary" icon="restaurant" class="q-mb-md" />
            <h3 class="text-h6 text-weight-bolder text-dark font-display text-uppercase q-my-none">
              Carne 100% Angus
            </h3>
            <p class="text-body2 text-grey-7 q-mt-sm" style="line-height: 1.5;">
              Cortes certificados sin rellenos ni soya. Molemos la carne diariamente y la asamos a la parrilla de piedra volcánica para sellar sus jugos naturales.
            </p>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="burger-card q-pa-lg text-center full-height">
            <q-avatar size="68px" color="red-1" text-color="primary" icon="bakery_dining" class="q-mb-md" />
            <h3 class="text-h6 text-weight-bolder text-dark font-display text-uppercase q-my-none">
              Panadería Propia
            </h3>
            <p class="text-body2 text-grey-7 q-mt-sm" style="line-height: 1.5;">
              Nuestros panes brioche de mantequilla y masas madre para pizza fermentan durante 48 horas para garantizar una textura esponjosa y fácil digestión.
            </p>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card class="burger-card q-pa-lg text-center full-height">
            <q-avatar size="68px" color="red-1" text-color="primary" icon="electric_moped" class="q-mb-md" />
            <h3 class="text-h6 text-weight-bolder text-dark font-display text-uppercase q-my-none">
              Despacho en Caliente
            </h3>
            <p class="text-body2 text-grey-7 q-mt-sm" style="line-height: 1.5;">
              Empaques térmicos ecológicos diseñados para conservar la temperatura y el crocante de tus papas hasta que tocan la puerta de tu hogar.
            </p>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Sección Equipo de Trabajo (Mínimo 3 integrantes: Chef, Cajero, Domiciliario) -->
    <div class="bg-grey-2 q-py-xl q-px-md q-px-lg-xl">
      <div style="max-width: 1320px; margin: 0 auto;">
        <div class="text-center q-mb-xl">
          <div class="row items-center justify-center q-gutter-x-sm text-primary q-mb-xs">
            <q-icon name="groups" size="18px" />
            <span class="text-subtitle1 text-weight-bolder text-uppercase font-display" style="letter-spacing: 2px;">
              NUESTRA GENTE
            </span>
          </div>
          <h2 class="text-h3 text-weight-bolder text-uppercase font-display text-dark q-my-none">
            CONOCE AL EQUIPO BURGER BITE
          </h2>
          <p class="text-subtitle1 text-grey-7 q-mt-sm" style="max-width: 600px; margin-left: auto; margin-right: auto;">
            El talento humano apasionado que hace posible cada entrega perfecta, desde los fuegos de la cocina hasta la puerta de tu casa.
          </p>
        </div>

        <div class="row q-col-gutter-xl justify-center">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="col-12 col-sm-6 col-md-4"
          >
            <q-card class="burger-card overflow-hidden text-center column justify-between full-height">
              <div>
                <q-img :src="member.photo" height="280px" fit="cover" class="team-photo">
                  <div class="absolute-bottom text-left q-pa-sm bg-dark-semi">
                    <q-badge color="primary" class="text-weight-bold text-uppercase">
                      {{ member.roleBadge }}
                    </q-badge>
                  </div>
                </q-img>

                <q-card-section class="q-pa-md">
                  <h3 class="text-h6 text-weight-bolder text-dark font-display text-uppercase q-my-none">
                    {{ member.name }}
                  </h3>
                  <div class="text-subtitle2 text-weight-bold text-primary q-mt-xs">
                    {{ member.title }}
                  </div>
                  <p class="text-caption text-grey-7 q-mt-sm" style="line-height: 1.5;">
                    {{ member.bio }}
                  </p>
                </q-card-section>
              </div>

              <q-card-section class="q-pt-none q-pb-md text-grey-6 text-caption">
                <q-icon :name="member.icon" size="18px" class="q-mr-xs text-primary" />
                <span>{{ member.quote }}</span>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección Ubicación, Horarios y Contacto Directo -->
    <div class="q-px-md q-px-lg-xl q-pt-xl" style="max-width: 1320px; margin: 0 auto;">
      <div class="row q-col-gutter-xl items-center">
        <!-- Información de contacto -->
        <div class="col-12 col-md-6">
          <span class="text-caption text-weight-bolder text-primary text-uppercase" style="letter-spacing: 2px;">
            VISÍTANOS O PIDE AHORA
          </span>
          <h2 class="text-h3 text-weight-bolder text-uppercase font-display text-dark q-my-none">
            UBICACIÓN &amp; CONTACTO DIRECTO
          </h2>
          <p class="text-subtitle1 text-grey-7 q-mt-md q-mb-lg">
            Estamos ubicados en una zona estratégica de fácil acceso para recogida en punto o para despachos inmediatos a toda la ciudad.
          </p>

          <q-list class="q-gutter-y-md">
            <q-item class="bg-white rounded-borders q-pa-md shadow-1">
              <q-item-section avatar>
                <q-avatar color="red-1" text-color="primary" icon="place" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold text-subtitle1">Dirección Física</q-item-label>
                <q-item-label caption class="text-grey-8">
                  Carrera 15 # 85-32, Zona Rosa (Parque de la 93), Bogotá, Colombia
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="bg-white rounded-borders q-pa-md shadow-1">
              <q-item-section avatar>
                <q-avatar color="red-1" text-color="primary" icon="schedule" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold text-subtitle1">Horarios de Atención</q-item-label>
                <q-item-label caption class="text-grey-8">
                  Lunes a Jueves: 11:30 AM - 10:30 PM<br />
                  Viernes y Sábados: 11:30 AM - 12:00 AM (Medianoche)<br />
                  Domingos y Festivos: 12:00 PM - 10:00 PM
                </q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="bg-white rounded-borders q-pa-md shadow-1">
              <q-item-section avatar>
                <q-avatar color="red-1" text-color="primary" icon="phone" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold text-subtitle1">Línea Telefónica &amp; Domicilios</q-item-label>
                <q-item-label caption class="text-grey-8">
                  +57 (315) 890-4321 / PBX: (601) 456-7890
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <div class="q-mt-lg">
            <q-btn
              unelevated
              rounded
              color="positive"
              icon="chat"
              size="lg"
              class="full-width q-py-sm text-weight-bolder text-uppercase font-display"
              label="CHATEAR POR WHATSAPP PARA PEDIDOS"
              href="https://wa.me/573158904321?text=Hola%20Burger%20Bite!%20Me%20encuentro%20en%20la%20secci%C3%B3n%20Nosotros%20y%20deseo%20hacer%20un%20pedido"
              target="_blank"
            />
          </div>
        </div>

        <!-- Tarjeta Visual de Ubicación y Fachada -->
        <div class="col-12 col-md-6">
          <q-card class="burger-card overflow-hidden">
            <q-img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
              height="360px"
              fit="cover"
            >
              <div class="absolute-bottom text-white q-pa-md bg-dark-semi">
                <div class="text-subtitle1 text-weight-bolder font-display text-uppercase">
                  Sede Principal - Zona Rosa
                </div>
                <div class="text-caption">
                  Salón con aire acondicionado, terraza pet-friendly y zona de parqueo.
                </div>
              </div>
            </q-img>
            <q-card-section class="bg-grey-1 q-pa-md row justify-between items-center">
              <div>
                <span class="text-caption text-grey-7">¿Tienes dudas sobre cómo llegar?</span>
                <div class="text-weight-bold text-primary">Te guiamos en tiempo real</div>
              </div>
              <q-btn
                outline
                rounded
                color="primary"
                icon="map"
                label="Ver en Google Maps"
                href="https://maps.google.com"
                target="_blank"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// Equipo de trabajo con mínimo 3 integrantes: Chef, Cajero, Domiciliario
const teamMembers = ref([
  {
    name: 'Mateo Ramírez',
    title: 'Chef Ejecutivo & Parrillero Master',
    roleBadge: 'CHEF PRINCIPAL',
    icon: 'restaurant',
    photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
    bio: 'Más de 12 años perfeccionando el asado al fuego vivo y la técnica de ahumado. Creador de la Monster Bacon BBQ y de todas nuestras salsas de autor.',
    quote: '"El secreto está en respetar la carne y el fuego."',
  },
  {
    name: 'Valentina Gómez',
    title: 'Cajera Líder & Atención al Cliente',
    roleBadge: 'CAJERA & SERVICIO',
    icon: 'point_of_sale',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'La sonrisa y la calidez que te da la bienvenida a Burger Bite. Encargada de gestionar tus órdenes rápidas y garantizar una atención impecable sin esperas.',
    quote: '"Nos aseguramos de que cada cliente se sienta en casa."',
  },
  {
    name: 'Carlos "Speedy" Mendoza',
    title: 'Domiciliario Estrella & Logística',
    roleBadge: 'DOMICILIARIO',
    icon: 'two_wheeler',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Conoce cada rincón y atajo de la ciudad para que tu hamburguesa y papas lleguen crujientes, humeantes y en menos de 30 minutos a tu mesa.',
    quote: '"Comida caliente y cliente feliz en tiempo récord."',
  },
])
</script>

<style scoped>
.about-hero {
  border-bottom: 1px solid #EEEEEE;
  background: radial-gradient(circle at 20% 20%, #FFF5F5 0%, #FFFFFF 70%);
}

.about-image-stack {
  display: inline-block;
  position: relative;
}

.about-main-img {
  max-width: 520px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  object-fit: cover;
}

.experience-card {
  position: absolute;
  bottom: -20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 14px;
}

.team-photo {
  transition: transform 0.4s ease;
}

.burger-card:hover .team-photo {
  transform: scale(1.05);
}

.bg-dark-semi {
  background: rgba(0, 0, 0, 0.65) !important;
}

.border-bottom {
  border-bottom: 1px solid #EEEEEE;
}
</style>
