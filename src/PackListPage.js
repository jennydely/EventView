import React from 'react';
import styled from 'styled-components/macro'
import { NavLink, useParams } from 'react-router-dom'
import useEventForm from './componentsEventPage/useEventForm'
import usePacklists from './usePacklists';
import ListItem from '../src/common/ListItem'

export default function PackListPage() {
    const { packlistName } = useParams()
    const { packlists } = usePacklists()
    const chosenPacklist = packlists.find(packlist => packlist.name === '' || packlist.name === packlistName)
    const { goBack } = useEventForm()
    return (        <>
            <main>

                <ul> {packlistName ? <h1>Packlist - {packlistName}</h1> : <h1>No Packlist</h1>}

                    {chosenPacklist ? chosenPacklist.packlist.sort().map(item => (
                        <ItemStyled key={item}><input type="checkbox" />{item}</ItemStyled>
                    ))
                        : <NoPacklistText>There is no packlist added to this event</NoPacklistText>}
                </ul>

            </main>
            <footer>
                <NavLink to="/">
                    <button type="button" onClick={goBack}>Back</button>
                </NavLink>
            </footer>
        </>
    )
}
const NoPacklistText = styled(ListItem)`
margin-top: 200px;
`

const ItemStyled = styled(ListItem)`
`