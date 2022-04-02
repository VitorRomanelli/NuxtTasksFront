<template>
  <v-app
    :dark="$vuetify.theme.dark"
    style="background: var(--v-background-base)"
  >
    <div v-show="$vuetify.breakpoint.mdAndUp" class="animation-wrapper">
      <div class="layered-animations">
        <svg class="large shape" viewBox="0 0 96 96">
          <defs>
            <linearGradient
              id="circleGradient"
              x1="0%"
              x2="100%"
              y1="20%"
              y2="80%"
            >
              <stop stop-color="#373734" offset="0%" />
              <stop stop-color="#242423" offset="50%" />
              <stop stop-color="#0D0D0C" offset="100%" />
            </linearGradient>
          </defs>
          <circle
            cx="48"
            cy="48"
            r="28"
            fill-rule="evenodd"
            stroke-linecap="square"
            fill="url(#circleGradient)"
          />
        </svg>
        <svg class="small shape color-red" viewBox="0 0 96 96">
          <polygon
            fill-rule="evenodd"
            points="48 17.28 86.4 80.11584 9.6 80.11584"
            stroke-linecap="square"
          />
        </svg>
        <svg class="large shape" viewBox="0 0 96 96">
          <defs>
            <linearGradient
              id="triangleGradient"
              x1="0%"
              x2="100%"
              y1="20%"
              y2="80%"
            >
              <stop stop-color="#373734" offset="0%" />
              <stop stop-color="#242423" offset="50%" />
              <stop stop-color="#0D0D0C" offset="100%" />
            </linearGradient>
          </defs>
          <polygon
            fill-rule="evenodd"
            points="48 17.28 86.4 80.11584 9.6 80.11584"
            stroke-linecap="square"
            fill="url(#triangleGradient)"
          />
        </svg>
        <svg class="x-small shape" viewBox="0 0 96 96">
          <polygon
            fill-rule="evenodd"
            points="48 17.28 86.4 80.11584 9.6 80.11584"
            stroke-linecap="square"
          />
        </svg>
        <svg class="x-small shape" viewBox="0 0 96 96">
          <rect
            width="48"
            height="48"
            x="24"
            y="24"
            fill-rule="evenodd"
            stroke-linecap="square"
          />
        </svg>
        <svg class="small shape color-red" viewBox="0 0 96 96">
          <rect
            width="48"
            height="48"
            x="24"
            y="24"
            fill-rule="evenodd"
            stroke-linecap="square"
          />
        </svg>
        <svg class="large shape" viewBox="0 0 96 96">
          <defs>
            <linearGradient
              id="rectGradient"
              x1="0%"
              x2="100%"
              y1="20%"
              y2="80%"
            >
              <stop stop-color="#373734" offset="0%" />
              <stop stop-color="#242423" offset="50%" />
              <stop stop-color="#0D0D0C" offset="100%" />
            </linearGradient>
          </defs>
          <rect
            width="48"
            height="48"
            x="24"
            y="24"
            fill-rule="evenodd"
            stroke-linecap="square"
            fill="url(#rectGradient)"
          />
        </svg>
        <svg class="small shape color-red" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r="32"
            fill-rule="evenodd"
            stroke-linecap="square"
          />
        </svg>
        <svg class="x-small shape" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r="32"
            fill-rule="evenodd"
            stroke-linecap="square"
          />
        </svg>
      </div>
    </div>

    <v-main>
      <Nuxt />
    </v-main>

    <v-footer app padless>
      <v-btn
        style="bottom: 20px; left: 20px"
        absolute
        fab
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>

      <transition mode="out-in">
        <div v-if="!$vuetify.theme.dark">
          <v-img :src="require('~/static/lightwave.svg')" class="image"></v-img>
        </div>

        <div v-else>
          <v-img :src="require('~/static/darkwave.svg')" class="image"></v-img>
        </div>
      </transition>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'ExternalLayout',

  data() {
    return {
      easings: ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring'],
      transformEls: null,
      layeredAnimationEl: null,
      shapeEls: null,
      triangleEl: null,
      trianglePoints: null,
      timeout: null,
    }
  },

  mounted() {
    this.animate()
  },

  methods: {
    animate() {
      this.transformEls = document.querySelectorAll('.transform-progress')
      this.layeredAnimationEl = document.querySelector('.layered-animations')

      if (this.layeredAnimationEl != null) {
        this.shapeEls = this.layeredAnimationEl.querySelectorAll('.shape')
        this.triangleEl = this.layeredAnimationEl.querySelector('polygon')
        this.trianglePoints = this.triangleEl.getAttribute('points').split(' ')

        for (let i = 0; i < this.shapeEls.length; i++) {
          this.animateShape(this.shapeEls[i])
        }

        this.resize(this.layeredAnimationEl)

        window.addEventListener('resize', this.resize)
      }
    },

    resize(el, padding, timeout) {
      if (this.timeout) clearTimeout(this.timeout)
      this.$anime.set(el, { scale: 1 })
      const pad = padding || 0
      const parentEl = el.parentNode
      const elOffsetWidth = el.offsetWidth - pad
      const parentOffsetWidth = parentEl.offsetWidth
      const ratio = parentOffsetWidth / elOffsetWidth
      timeout = setTimeout(this.$anime.set(el, { scale: ratio }), 10)
    },

    createKeyframes(value) {
      const keyframes = []
      for (let i = 0; i < 30; i++) keyframes.push({ value })
      return keyframes
    },

    animateShape(el) {
      const circleEl = el.querySelector('circle')
      const rectEl = el.querySelector('rect')
      const polyEl = el.querySelector('polygon')

      const self = this

      const animation = this.$anime
        .timeline({
          targets: el,
          duration() {
            return self.$anime.random(600, 2200)
          },
          easing() {
            return self.easings[self.$anime.random(0, self.easings.length - 1)]
          },
          complete(anim) {
            self.animateShape(anim.animatables[0].target)
          },
        })
        .add(
          {
            translateX: self.createKeyframes(function (el) {
              return el.classList.contains('large')
                ? self.$anime.random(-200, 200)
                : self.$anime.random(-420, 420)
            }),
            translateY: self.createKeyframes(function (el) {
              return el.classList.contains('large')
                ? self.$anime.random(-90, 90)
                : self.$anime.random(-250, 250)
            }),
            rotate: self.createKeyframes(function () {
              return self.$anime.random(-180, 180)
            }),
          },
          0
        )
      if (circleEl) {
        animation.add(
          {
            targets: circleEl,
            r: self.createKeyframes(function () {
              return self.$anime.random(32, 72)
            }),
          },
          0
        )
      }
      if (rectEl) {
        animation.add(
          {
            targets: rectEl,
            width: self.createKeyframes(function () {
              return self.$anime.random(64, 120)
            }),
            height: self.createKeyframes(function () {
              return self.$anime.random(64, 120)
            }),
          },
          0
        )
      }
      if (polyEl) {
        animation.add(
          {
            targets: polyEl,
            points: self.createKeyframes(function () {
              const scale = self.$anime.random(72, 180) / 100
              return self.trianglePoints
                .map(function (p) {
                  return p * scale
                })
                .join(' ')
            }),
          },
          0
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.image {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all ease-in-out 0.5s;
}

.image:hover {
  transform: scaleX(1.5);
}

.animation-wrapper {
  width: 800px;
}

/** Layered Animation **/

.layered-animations {
  position: absolute;
  top: 40%;
  right: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.layered-animations .shape {
  position: absolute;
  top: 40%;
  overflow: visible;
  width: 250px;
  height: 250px;
  stroke: transparent;
  stroke-width: 1px;
  fill: url(#shapesGradient);
}

@media (min-width: 740px) {
  .layered-animations .shape {
    stroke-width: 0.5px;
  }
}

.layered-animations .small.shape {
  width: 62px;
  height: 62px;
  fill: var(--v-accent-base);
}

.layered-animations .x-small.shape {
  width: 38px;
  height: 38px;
  stroke: var(--v-primarycontrast-base);
  fill: var(--v-primarycontrast-base);
}
</style>