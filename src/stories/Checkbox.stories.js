import React from 'react'
import styled from 'styled-components/macro'
import Checkbox from '../Pages/components/common/Checkbox'
import ListItem from '../Pages/components/common/ListItem'

export default {
  title: 'EventView/Checkbox',
  component: Checkbox,
}

const Template = (args) => (
  <>
    <ListItemStyled key="Zelt">
      <Checkbox {...args} type="Checkbox" /> <span>Zelt</span>
    </ListItemStyled>
  </>
)

export const box = Template.bind({})
box.args = {}

const ListItemStyled = styled(ListItem)`
  justify-content: flex-start;
`
