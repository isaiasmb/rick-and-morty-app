import { Story, Meta } from '@storybook/react/types-6-0'
import Location, { LocationProps } from '.'
import mock from './mock'

export default {
  title: 'Location',
  component: Location,
  args: mock
} as Meta

export const Default: Story<LocationProps> = (args) => (
  <div style={{ width: '35rem' }}>
    <Location {...args} />
  </div>
)
