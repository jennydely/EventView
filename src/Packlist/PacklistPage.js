import React from 'react';
import styled from 'styled-components/macro'
import { useParams, useHistory } from 'react-router-dom'
import usePacklists from './usePacklists';
import ListItem from '../common/ListItem'
import ListContainer from '../common/ListContainer'
import MainWhenFooter from '../common/MainWhenFooter'

export default function PackListPage() {
    const { packlistName } = useParams()
    const { packlists } = usePacklists()
    const chosenPacklist = packlists.find(packlist => packlist.name === '' || packlist.name === packlistName)
    const history = useHistory()
  function goBackButton() {
    history.goBack()
  }
    return (
        <>
            <MainWhenFooter>
                {packlistName ? <h1>PackList</h1> : <h1>No PackList</h1>}
                {packlistName ? <PacklistButton>{packlistName}</PacklistButton> : ""}


                {chosenPacklist ?
                    <ListContainer>
                        {chosenPacklist.packlist.sort().map(item => (
                            <ListItem key={item}><input type="checkbox" />{item}</ListItem>
                        ))}
                    </ListContainer>

                    : <NoPacklistText>There is no packlist added to this event</NoPacklistText>}


            </MainWhenFooter>
            <footer>
                <button type="button" onClick={goBackButton}>Back</button>
            </footer>
        </>
    )
}
const NoPacklistText = styled.p`
text-align: center;
`
const PacklistButton = styled.button`
border: 2px solid black;
margin: 4px 0 0 7px;
padding-bottom:0;
`