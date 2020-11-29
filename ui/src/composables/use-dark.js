import { computed } from 'vue'

export const useDarkProps = {
  dark: {
    type: Boolean,
    default: null
  }
}

export default function (props, $q) {
  return {
    isDark: computed(() => props.dark === null
      ? $q.dark.isActive
      : props.dark
    )
  }
}