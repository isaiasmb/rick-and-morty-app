import { Story, Meta } from '@storybook/react/types-6-0'
import CharCard, { CharCardProps } from '.'
import mock from './mock'

export default {
  title: 'CharCard',
  component: CharCard,
  args: mock
} as Meta

export const Default: Story<CharCardProps> = (args) => (
  <div style={{ width: '35rem' }}>
    <CharCard {...args} />
  </div>
)
