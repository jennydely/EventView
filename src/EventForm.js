import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
import Input from './common/Input'
import Label from './common/Label'
import ErrorMessage  from './common/ErrorMessage'
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
                    <ErrorMessageCategoryReq>Category is required!</ErrorMessageCategoryReq>
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
                    <ErrorMessageNameReq>Name is required!</ErrorMessageNameReq>
                )}
                {errors.name && errors.name.type === 'minLength' && (
                    <ErrorMessageName>
                        This field requires at least 3 characters!
                    </ErrorMessageName>
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
                    <ErrorMessageLocationReq>Location is required!</ErrorMessageLocationReq>
                )}
                {errors.location && errors.location.type === 'minLength' && (
                    <ErrorMessageLocation>
                        This field requires at least 3 characters!
                    </ErrorMessageLocation>
                )}

                <EventInfosText>EventInfos</EventInfosText>
                <DurationInputLabel id="EventStartDate">
                    Duration:</DurationInputLabel>
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
                        <ErrorMessageDate>Date is required!</ErrorMessageDate>
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
                    <ErrorMessageStreetReq>Street is required!</ErrorMessageStreetReq>
                )}
                {errors.street && errors.street.type === 'minLength' && (
                    <ErrorMessageStreet>
                        This field requires at least 5 characters!
                    </ErrorMessageStreet>
                )}

                <ZipInput
                    placeholder="zip"
                    htmlFor="zip"
                    name="zip"
                    ref={register({ required: true, minLength: 2 })}
                />

                {errors.zip && errors.zip.type === 'required' && (
                    <ErrorMessageZipReq>Zip is required!</ErrorMessageZipReq>
                )}
                {errors.zip && errors.zip.type === 'minLength' && (
                    <ErrorMessageZip>
                        This field requires at least 2 characters!
                    </ErrorMessageZip>
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
                    <ErrorMessageWebsiteReq>Website is required!</ErrorMessageWebsiteReq>
                )}
                {errors.website && errors.website.type === 'minLength' && (
                    <ErrorMessageWebsite>
                        This field requires at least 8 characters!
                    </ErrorMessageWebsite>
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



const Form = styled.form`
display:grid;
grid-template-columns: repeat(3,auto);
grid-template-rows: repeat(18,auto) 30px;
align-content: center;
min-width: 300px;
gap: 4px;
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
const ErrorMessageCategoryReq = styled(ErrorMessage)`
grid-column: 1;
grid-row: 4;
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

const ErrorMessageNameReq = styled(ErrorMessage)`
grid-column: 2 / span 2;
grid-row: 4;
`
const ErrorMessageName = styled(ErrorMessage)`
grid-column: 2 / span 2;
grid-row: 4;
`

const LocationInputLabel = styled(Label)`
grid-column: 2 / span 2;
grid-row: 5;
text-align:left;
`
const LocationInput = styled(Input)`
grid-column: 2 / span 2;
grid-row: 6;
`
const ErrorMessageLocationReq = styled(ErrorMessage)`
grid-column: 2 / span 2;
grid-row: 7;
`

const ErrorMessageLocation = styled(ErrorMessage)`
grid-column: 2 / span 2;
grid-row: 7;
`
const EventInfosText = styled.h2`
grid-column: 1/ span 2;
grid-row: 8;
`
const DurationInputLabel = styled(Label)`
grid-column: 1;
grid-row: 9;
`
const EventStartDateInput = styled(Input)`
grid-column: 2;
grid-row: 9;
`

const EventEndDateInput = styled(Input)`
grid-column: 3;
grid-row: 9;
`
const ErrorMessageDate = styled(ErrorMessage)`
grid-column: 2/span 2;
grid-row: 10;
`

const AddressInputLabel = styled(Label)`
grid-column: 1;
grid-row: 11 /span 2 ;
`
const StreetInput = styled(Input)`
grid-column: 2 / span 2;
grid-row: 11 ;
`
const ErrorMessageStreetReq = styled(ErrorMessage)`
grid-column: 2 / span 2;
grid-row: 12 ;
`

const ErrorMessageStreet = styled(ErrorMessage)`
grid-column: 2 / span 2;
grid-row: 12 ;
`

const ZipInput = styled(Input)`
grid-column: 2 / span 2;
grid-row: 13 ;
`
const ErrorMessageZipReq = styled(ErrorMessage)`
grid-column: 2 / span 2;
grid-row: 14 ;
`
const ErrorMessageZip = styled(ErrorMessage)`
grid-column: 2 / span 2;
grid-row: 14 ;
`
const WebsiteInputLabel = styled(Label)`
grid-column: 1;
grid-row: 15;
`
const WebsiteInput = styled(Input)`
grid-column: 2 / span 2;
grid-row: 15;
`
const ErrorMessageWebsiteReq = styled(ErrorMessage)`
grid-column: 2 / span 2;
grid-row: 16;
`

const ErrorMessageWebsite = styled(ErrorMessage)`
grid-column: 2 / span 2;
grid-row: 16;
`

const PriceInputLabel = styled(Label)`
grid-column: 1;
grid-row: 17;
`
const PriceInput = styled(Input)`
grid-column: 2 / span 2;
grid-row: 17;
`

const PictureInputLabel = styled(Label)`
grid-column: 1;
grid-row: 18;
`
const PictureInput = styled(Input)`
grid-column: 2 / span 2;
grid-row: 18;
`

const ButtonGroup = styled.div`
grid-column: 1 / span 3;
grid-row: 19;
display: flex;
justify-content: center;
width: 100%;
maring:7px;
margin-top: 30px;
`
const SubmitButton = styled.button`
  background-color: rgba(111,29,27,0.75);
`

