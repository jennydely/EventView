import React, { useContext, useEffect } from 'react'
import styled from 'styled-components/macro'
import { useParams, useHistory } from 'react-router-dom'
import editIcon from '../../img/editIcon.svg'
import FormHeader from '../components/FormHeader'
import ListItem from '../components/common/ListItem'
import ListContainer from '../components/common/ListContainer'
import Checkbox from '../components/common/Checkbox'
import { comparePacklists } from './services/comparePacklists'
import usePacklists from './usePacklists'
import fetchPrivatePacklists from '../../redux/fetchPrivatePacklists'
import fetchPublicPacklists from '../../redux/fetchPublicPacklists'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UserContext } from '../../providers/UserProvider'

export function PacklistPage({ packlists, fetchPrivatePacklists, fetchPublicPacklists }) {
  const user = useContext(UserContext);
  const { packlistName } = useParams()
  const { updatePacklistCheckbox } = usePacklists()
  const chosenPacklist = comparePacklists(packlists, packlistName)
  const history = useHistory()

  function handleEditPacklist(packlistId) {
    history.push('/packlistform/' + packlistId)
  }

  useEffect(() => {
    fetchPublicPacklists()
    if (user) {

      fetchPrivatePacklists({ userToken: user.token })
    }
  }, [fetchPublicPacklists, fetchPrivatePacklists, user])


  return (
    <>
      <FormHeader
        headerText={packlistName ? 'Packlist' : 'No PackList'}
        headerButton={
          packlistName ? (
            <EditButton onClick={handleEditButtonClick}>
              <img src={editIcon} alt="edit" />
            </EditButton>
          ) : (
              ''
            )
        }
      />
      <main>
        {packlistName ? <PacklistName>{packlistName}</PacklistName> : ''}

        {chosenPacklist ? (
          <ListContainer>
            {chosenPacklist.packlist.sort().map((item) => (
              <ListItemStyled key={item.itemID} id={item.itemID}>
                <ItemContainer>
                  <Checkbox
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => handleCheckboxClick(item)}
                  />
                  {item.item}
                </ItemContainer>
              </ListItemStyled>
            ))}
          </ListContainer>
        ) : (
            <NoPacklistText>
              There is no packlist added to this event
            </NoPacklistText>
          )}
      </main>
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

const mapStateToProps = state => {
  const { publicPacklists } = state.packlists || {};
  return { packlists: publicPacklists };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPrivatePacklists: fetchPrivatePacklists,
  fetchPublicPacklists: fetchPublicPacklists
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PacklistPage)

const NoPacklistText = styled.p`
  text-align: center;
`
const ListItemStyled = styled(ListItem)`
  justify-content: flex-start;
`
const PacklistName = styled.h2`
  text-align: left;
  width: fit-content;
  border: var(--borderUL);
  border-radius: 7px;
  margin: 4px 0 0.13px 7px;
  padding: 0 4px;
`
const ItemContainer = styled.label`
  display: flex;
  align-items: center;
`

const EditButton = styled.button`
  margin: 0 7px;
`
