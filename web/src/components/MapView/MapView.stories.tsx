// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MapView> = (args) => {
//   return <MapView {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import MapView from './MapView'

export const generated = () => {
  return <MapView />
}

export default {
  title: 'Components/MapView',
  component: MapView,
} as ComponentMeta<typeof MapView>
