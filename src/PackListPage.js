import React from 'react';
import styled from 'styled-components/macro'
import { NavLink, useParams } from 'react-router-dom'
import useEventForm from './componentsEventPage/useEventForm'
import usePacklists from './usePacklists';
import ListItem from '../src/common/ListItem'
import ListContainer from '../src/common/ListContainer'
import Main92vh from '../src/common/Main92vh'

export default function PackListPage() {
    const { packlistName } = useParams()
    const { packlists } = usePacklists()
    const chosenPacklist = packlists.find(packlist => packlist.name === '' || packlist.name === packlistName)
    const { goBack } = useEventForm()
    return (
        <>
            <Main92vh>
                {packlistName ? <h1>PackList</h1> : <h1>No PackList</h1>}
                {packlistName ? <PacklistButton>{packlistName}</PacklistButton> : ""}


                {chosenPacklist ?
                    <ListContainer>
                        {chosenPacklist.packlist.sort().map(item => (
                            <ListItem key={item}><input type="checkbox" />{item}</ListItem>
                        ))}
                    </ListContainer>

                    : <NoPacklistText>There is no packlist added to this event</NoPacklistText>}


            </Main92vh>
            <footer>
                <NavLink to="/">
                    <button type="button" onClick={goBack}>Back</button>
                </NavLink>
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