import { Story, Meta } from '@storybook/react/types-6-0'
import Status, { StatusProps } from '.'

export default {
  title: 'Status',
  component: Status,
  args: {
    status: 'Alive'
  }
} as Meta

export const Default: Story<StatusProps> = (args) => <Status {...args} />
