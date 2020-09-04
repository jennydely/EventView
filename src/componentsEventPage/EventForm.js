import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
import Input from '../common/Input'
import Label from '../common/Label'
import PropTypes from 'prop-types'

EventForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
}

export default function EventForm({ onSave }) {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (eventEntry, event) => {
        event.target.reset()
        onSave(eventEntry)
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <TitleText>Create Event</TitleText>
                <CategoryInputLabel id="category">
                    Category:
                    </CategoryInputLabel>
                <CategoryInput
                    placeholder="Choose a category"
                    name="category"
                    htmlFor="category"
                    ref={register({ required: true })}
                />
                {errors.category && errors.category.type === 'required' && (
                    <ErrorMessage>Category is required!</ErrorMessage>
                )}

                <NameInputLabel id="name">
                    EventName:
                    </NameInputLabel>
                <NameInput
                    placeholder="event name"
                    htmlFor="name"
                    name="name"
                    ref={register({ required: true, minLength: 3 })}
                />

                {errors.name && errors.name.type === 'required' && (
                    <ErrorMessage>Name is required!</ErrorMessage>
                )}
                {errors.name && errors.name.type === 'minLength' && (
                    <ErrorMessage>
                        This field requires at least 3 characters!
                    </ErrorMessage>
                )}
                <LocationInputLabel id="location" >
                    EventLocation:
                    </LocationInputLabel>
                <LocationInput
                    placeholder="location of the event"
                    htmlFor="location"
                    name="location"
                    ref={register({ required: true, minLength: 3 })}
                />


                {errors.location && errors.location.type === 'required' && (
                    <ErrorMessage>Location is required!</ErrorMessage>
                )}
                {errors.location && errors.location.type === 'minLength' && (
                    <ErrorMessage>
                        This field requires at least 3 characters!
                    </ErrorMessage>
                )}

                <EventInfosText>EventInfos</EventInfosText>
                <PeriodeInputLabel id="EventStartDate">
                    Periode:</PeriodeInputLabel>
                <EventStartDateInput 
                    placeholder="yyyy-mm-dd"
                    htmlFor="EventStartDate"
                    name="eventStartDate"
                    ref={register({ required: true })}
                />

                <EventEndDateInput 
                    placeholder="yyyy-mm-dd"
                    htmlFor="EventEndDate"
                    name="eventEndDate"
                    ref={register({ required: true })}
                />
                {errors.eventStartDate && errors.eventStartDate.type === 'required' &&
                    errors.eventEndDate && errors.eventEndDate.type === 'required' &&
                    (
                        <ErrorMessage>Date is required!</ErrorMessage>
                    )}

                <AddressInputLabel id="street">
                    Address:
                </AddressInputLabel>
                <StreetInput 
                    placeholder="street + number"
                    htmlFor="Street"
                    name="street"
                    ref={register({ required: true, minLength: 5 })}
                />


                {errors.street && errors.street.type === 'required' && (
                    <ErrorMessage>Street is required!</ErrorMessage>
                )}
                {errors.street && errors.street.type === 'minLength' && (
                    <ErrorMessage>
                        This field requires at least 5 characters!
                    </ErrorMessage>
                )}

                <ZipInput
                    placeholder="zip"
                    htmlFor="zip"
                    name="zip"
                    ref={register({ required: true, minLength: 2 })}
                />

                {errors.zip && errors.zip.type === 'required' && (
                    <ErrorMessage>Zip is required!</ErrorMessage>
                )}
                {errors.zip && errors.zip.type === 'minLength' && (
                    <ErrorMessage>
                        This field requires at least 2 characters!
                    </ErrorMessage>
                )}

                <WebsiteInputLabel id="website">
                    Website:</WebsiteInputLabel>
                <WebsiteInput
                    placeholder="http://www.website.de"
                    htmlFor="website"
                    name="website"
                    ref={register({ 
                        required: true, 
                        minLength: 8, 
                        pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
                    })}
                />


                {errors.website && errors.website.type === 'required' && (
                    <ErrorMessage>Website is required!</ErrorMessage>
                )}
                {errors.website && errors.website.type === 'minLength' && (
                    <ErrorMessage>
                        This field requires at least 8 characters!
                    </ErrorMessage>
                )}

                <PriceInputLabel id="price">
                    TicketPrice:</PriceInputLabel>
                <PriceInput
                    placeholder="ticket price or range"
                    htmlFor="price"
                    name="price"
                    ref={register({ required: false })}
                />

                <PictureInputLabel id="poster">
                    Picture: </PictureInputLabel>
                <PictureInput
                    placeholder="src link http://www.website.de/banner.jpg"
                    htmlFor="poster"
                    name="poster"
                    ref={register({ required: false })}
                />

                <ButtonGroup>
                    <button type="reset" >
                        Reset
                    </button>
                    <SubmitButton type="submit">Save</SubmitButton>
                </ButtonGroup>
            </Form>
        </>
    )
}

const ErrorMessage = styled.p`
  color: var(--orange-main);
  font-size: 75%;

  ::before {
    display: inline;
    content: '⚠ ';
  }
`
const Form = styled.form`
display:grid;
grid-template-columns: repeat(3,auto);
grid-template-rows: repeat(12,auto) 30px;
align-content: center;
min-width: 300px;
gap: 7px;
`
const TitleText = styled.h1`
grid-column: 1 / span 3;
grid-row: 1;
`
const CategoryInputLabel = styled(Label)`
grid-column: 1;
grid-row: 2;
text-align:left;
`
const CategoryInput = styled(Input)`
grid-column: 1;
grid-row: 3;
`
const NameInputLabel = styled(Label)`
grid-column: 2 / span 2;
grid-row: 2;
text-align:left;
`
const NameInput = styled(Input)`
grid-column: 2 / span 2;
grid-row: 3;
`
const LocationInputLabel = styled(Label)`
grid-column: 2 / span 2;
grid-row: 4;
text-align:left;
`
const LocationInput = styled(Input)`
grid-column: 2 / span 2;
grid-row: 5;
`
const EventInfosText = styled.h2`
grid-column: 1/ span 2;
grid-row: 6;
`
const PeriodeInputLabel = styled(Label)`
grid-column: 1;
grid-row: 7;
`
const EventStartDateInput = styled(Input)`
grid-column: 2;
grid-row: 7;
`
const EventEndDateInput = styled(Input)`
grid-column: 3;
grid-row: 7;
`
const AddressInputLabel = styled(Label)`
grid-column: 1;
grid-row: 8 /span 2 ;
`
const StreetInput = styled(Input)`
grid-column: 2 / span 2;
grid-row: 8 ;
`
const ZipInput = styled(Input)`
grid-column: 2 / span 2;
grid-row: 9 ;
`
const WebsiteInputLabel = styled(Label)`
grid-column: 1;
grid-row: 10;
`
const WebsiteInput = styled(Input)`
grid-column: 2 / span 2;
grid-row: 10;
`
const PriceInputLabel = styled(Label)`
grid-column: 1;
grid-row: 11;
`
const PriceInput = styled(Input)`
grid-column: 2 / span 2;
grid-row: 11;
`
const PictureInputLabel = styled(Label)`
grid-column: 1;
grid-row: 12;
`
const PictureInput = styled(Input)`
grid-column: 2 / span 2;
grid-row: 12;
`
const ButtonGroup = styled.div`
grid-column: 1 / span 3;
grid-row: 13;
display: flex;
justify-content: space-evenly;
width: 100%;
margin-top: 50px;
`
const SubmitButton = styled.button`
  background-color: rgba(111,29,27,0.75);
`

