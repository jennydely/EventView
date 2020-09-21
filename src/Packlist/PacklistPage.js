import React from 'react'
import styled from 'styled-components/macro'
import { useParams, useHistory } from 'react-router-dom'
import usePacklists from './usePacklists'
import ListItem from '../common/ListItem'
import ListContainer from '../common/ListContainer'
import Checkbox from '../common/Checkbox'
import { comparePacklists } from '../services/comparePacklists'
import editIcon from '../img/editIcon.svg'
import backIcon from '../img/backIcon.svg'

export default function PackListPage() {
  const { packlistName } = useParams()
  const { packlists, updatePacklistCheckbox } = usePacklists()
  const chosenPacklist = comparePacklists(packlists, packlistName)
  const history = useHistory()
  function goBackButton() {
    history.goBack()
  }
  function handleEditPacklist(packlistId) {
    history.push('/editpacklist/' + packlistId)
  }
  return (
    <>
      <header>
        {packlistName ? <h1>PackList</h1> : <h1>No PackList</h1>}
        <button onClick={handleEditButtonClick}>
          <EditImg src={editIcon} alt="edit" />
        </button>
      </header>
      <main>
        {packlistName ? <PacklistButton>{packlistName}</PacklistButton> : ''}

        {chosenPacklist ? (
          <ListContainer>
            {chosenPacklist.packlist.sort().map((item) => (
              <ListItemStyled key={item.itemID} id={item.itemID}>
                <Checkbox
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheckboxClick(item)}
                />
                <span>{item.item}</span>
                <div></div>
              </ListItemStyled>
            ))}
          </ListContainer>
        ) : (
          <NoPacklistText>
            There is no packlist added to this event
          </NoPacklistText>
        )}
      </main>
      <>
        <footer>
          <button type="button" onClick={goBackButton}>
            <img src={backIcon} alt="back" />
          </button>
        </footer>
      </>
    </>
  )
  function handleEditButtonClick() {
    const packlistId = chosenPacklist.id
    handleEditPacklist(packlistId)
  }

  function handleCheckboxClick(checkedItem) {
    const id = checkedItem.itemID
    const index = chosenPacklist.packlist.findIndex(
      (item) => item.itemID === id
    )
    const clickedPacklistItem = chosenPacklist.packlist[index]
    clickedPacklistItem.checked = !clickedPacklistItem.checked
    updatePacklistCheckbox(chosenPacklist)
  }
}

const EditImg = styled.img`
  width: 40px;
  height: auto;
  margin: 7px 4px;
`
const NoPacklistText = styled.p`
  text-align: center;
`
const ListItemStyled = styled(ListItem)`
  justify-content: flex-start;
`
const PacklistButton = styled.button`
  border: var(--border-darkgrey);
  margin: 4px 0 0 7px;
  padding-bottom: 0;
`
