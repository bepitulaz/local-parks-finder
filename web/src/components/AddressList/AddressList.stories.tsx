// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof AddressList> = (args) => {
//   return <AddressList {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import AddressList from './AddressList'

export const generated = () => {
  return <AddressList />
}

export default {
  title: 'Components/AddressList',
  component: AddressList,
} as ComponentMeta<typeof AddressList>
