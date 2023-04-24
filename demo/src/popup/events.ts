import consola from 'consola'

export const events = [
  {
    key: 'echo-hello',
    title: '输出 Hello',
    callback: () => {
      consola.log('Hello')
    },
  },
  {
    key: 'echo-world',
    title: '输出 World',
    callback: () => {
      consola.log('World')
    },
  },
]
