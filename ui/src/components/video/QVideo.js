import { h, defineComponent, computed } from 'vue'

import useRatio, { useRatioProps } from '../../composables/use-ratio.js'

export default defineComponent({
  name: 'QVideo',

  props: {
    src: {
      type: String,
      required: true
    },

    ...useRatioProps
  },

  setup (props) {
    const { ratioStyle } = useRatio(props)

    const classes = computed(() =>
      'q-video' +
      (props.ratio !== void 0 ? ' q-video--responsive' : '')
    )

    return () => h('div', {
      class: classes.value,
      style: ratioStyle.value
    }, [
      h('iframe', {
        src: props.src,
        frameborder: '0',
        allowfullscreen: true
      })
    ])
  }
})
