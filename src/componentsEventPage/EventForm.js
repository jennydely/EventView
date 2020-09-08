import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
import Input from '../common/Input'
import Label from '../common/Label'
import ErrorMessage from '../common/ErrorMessage'
import Select from '../common/Select'
import PropTypes from 'prop-types'

EventForm.propTypes = {
    onSave: PropTypes.func.isRequired,
}

export default function EventForm({ onSave }) {
    const { register, handleSubmit, errors, reset } = useForm()
    const onSubmit = (eventEntry, event) => {
        // for testing...
        if (event && event.target && typeof event.target.reset === 'function')
            event.target.reset()
        onSave(eventEntry)
    }
    const endDateRef = useRef(null)

    return (
        <>
            <Form data-testid="1337" onSubmit={handleSubmit(onSubmit)}>
                <TitleText>Create Event</TitleText>
                <CategoryInputLabel htmlFor="category">
                    Category:
                    </CategoryInputLabel>
                <CategoryInput name="category" id="category"
                    register={register({ required: true })} options={["metal", "medieval", "sand", "other"]} />
                {errors.category && errors.category.type === 'required' && (
                    <ErrorMessageCategoryReq>Category is required!</ErrorMessageCategoryReq>
                )}

                <NameInputLabel htmlFor="name">
                    EventName:
                    </NameInputLabel>
                <NameInput
                    placeholder="event name"
                    id="name"
                    name="name"
                    ref={register({
                        required: true, minLength: 3, maxLength: 20,
                        validate: value => value && value.trim().length >= 3 && value.trim().length <= 20
                    })}
                />

                {errors.name && errors.name.type === 'required' && (
                    <ErrorMessageNameReq>Name is required!</ErrorMessageNameReq>
                )}
                {errors.name && (errors.name.type === 'validate' || errors.name.type === 'minLength') && (
                    <ErrorMessageName>
                        This field requires at least 3 characters!
                    </ErrorMessageName>
                )}
                {errors.name && (errors.name.type === 'validate' || errors.name.type === 'maxLength') && (
                    <ErrorMessageName>
                        The name can reach a maximum of 20 characters!
                    </ErrorMessageName>
                )}


                <LocationInputLabel htmlFor="location">
                    EventLocation:
                    </LocationInputLabel>
                <LocationInput
                    placeholder="location of the event"
                    id="location"
                    name="location"
                    ref={register({
                        required: true,
                        minLength: 3,
                        maxLength: 20,
                        validate: value => value && value.trim().length >= 3 && value.trim().length <= 20
                    })}
                />

                {errors.location && errors.location.type === 'required' && (
                    <ErrorMessageLocationReq>Location is required!</ErrorMessageLocationReq>
                )}
                {errors.location && (errors.location.type === 'validate' || errors.location.type === 'minLength') && (
                    <ErrorMessageLocation> This field requires at least 3 characters!</ErrorMessageLocation>
                )}
                {errors.location && (errors.location.type === 'validate' || errors.location.type === 'maxLength') && (
                    <ErrorMessageLocation>
                        The location can reach a maximum of 20 characters!
                    </ErrorMessageLocation>
                )}

                <EventInfosText>EventInfos</EventInfosText>
                <DurationInputLabel htmlFor="EventStartDate">
                    Duration:</DurationInputLabel>

                <EventStartDateInput
                    placeholder="yyyy-mm-dd"
                    id="EventStartDate"
                    name="eventStartDate"
                    ref={register({
                        required: true,
                        pattern: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
                        validate: value => value <= endDateRef.current.value,
                    })}
                />
                {(errors.eventStartDate && errors.eventStartDate.type === 'validate') &&
                    <ErrorMessageStartDate>Start date must be before end date! </ErrorMessageStartDate>
                }

                {(errors.eventStartDate && errors.eventStartDate.type === 'required') &&
                    <ErrorMessageStartDate>Date is required and needs the right form! </ErrorMessageStartDate>
                }

                {(errors.eventStartDate && errors.eventStartDate.type === 'pattern') &&
                    (<ErrorMessageStartDate>Date must be written like: yyyy-mm-dd</ErrorMessageStartDate>)}

                <EventEndDateInput
                    placeholder="yyyy-mm-dd"
                    id="EventEndDate"
                    name="eventEndDate"
                    ref={(el) => {
                        endDateRef.current = el
                        register(el, {
                            required: true,
                            pattern: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
                        })
                    }}
                />

                {(errors.eventEndDate && errors.eventEndDate.type === 'required') &&
                    <ErrorMessageEndDate>Date is required and needs the right form! </ErrorMessageEndDate>
                }

                {(errors.eventEndDate && errors.eventEndDate.type === 'pattern') &&
                    (
                        <ErrorMessageEndDate> Date must be written like: yyyy-mm-dd </ErrorMessageEndDate>
                    )}

                <AddressInputLabel htmlFor="Street">
                    Address:
                </AddressInputLabel>
                <StreetInput
                    placeholder="street + number"
                    id="street"
                    name="street"
                    ref={register({
                        required: true, minLength: 5,
                        validate: value => value && value.trim().length >= 5
                    })}
                />

                {errors.street && errors.street.type === 'required' && (
                    <ErrorMessageStreetReq>Street is required!</ErrorMessageStreetReq>
                )}
                {errors.street && (errors.street.type === 'validate' || errors.street.type === 'minLength') && (
                    <ErrorMessageStreet>
                        This field requires at least 5 characters!
                    </ErrorMessageStreet>
                )}

                <ZipInput
                    placeholder="zip"
                    id="zip"
                    name="zip"
                    ref={register({
                        required: true, minLength: 2,
                        validate: value => value && value.trim().length >= 2
                    })}
                />

                {errors.zip && errors.zip.type === 'required' && (
                    <ErrorMessageZipReq>Zip is required!</ErrorMessageZipReq>
                )}
                {errors.zip && (errors.zip.type === 'validate' || errors.zip.type === 'minLength') && (
                    <ErrorMessageZip>
                        This field requires at least 2 characters!
                    </ErrorMessageZip>
                )}

                <WebsiteInputLabel htmlFor="website">
                    Website:</WebsiteInputLabel>
                <WebsiteInput
                    placeholder="http://www.website.de"
                    id="website"
                    name="website"
                    ref={register({
                        required: true,
                        minLength: 8,
                        validate: value => value && value.trim().length >= 8,
                        pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
                    })}
                />

                {errors.website && errors.website.type === 'required' && (
                    <ErrorMessageWebsiteReq>Website is required!</ErrorMessageWebsiteReq>
                )}
                {errors.website && (errors.website.type === 'validate' || errors.website.type === 'minLength') && (
                    <ErrorMessageWebsite>
                        This field requires at least 8 characters!
                    </ErrorMessageWebsite>
                )}

                <PriceInputLabel htmlFor="price">
                    TicketPrice:</PriceInputLabel>
                <PriceInput
                    placeholder="ticket price or range"
                    id="price"
                    name="price"
                    ref={register({ required: false })}
                />

                <PictureInputLabel htmlFor="poster">
                    Picture: </PictureInputLabel>
                <PictureInput
                    placeholder="http://www.website.de/banner.jpg"
                    id="poster"
                    name="poster"
                    ref={register({
                        required: false,
                        pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
                    })}
                />

                <PacklistInputLabel htmlFor="packlist">
                    Add PackList:
                    </PacklistInputLabel>
                <PacklistInput name="packlistCategory" id="packlist"
                    register={register({ required: true })} options={["festival", "medieval"]} />

                <ButtonGroup>
                    <button type="reset" onClick={() => reset()}>
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
grid-template-rows: repeat(19,auto) 30px;
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
const CategoryInput = styled(Select)`
grid-column: 1;
grid-row: 3;
display: block;
width: 100%;
padding: 20px;
border: 1px solid rgb(96,99,104);
border-radius: 4px;
margin-top: 0;
padding: 4px;
font-size: 100%;
color: black;
background: ${({ name }) => name === 'sand' ? 'rgba(248,149,17,0.46)' : (name === 'metal' ? 'rgba(49,42,42,0.75)' : (name === 'medieval' ? 'rgba(67,40,24,0.70)' : (name === 'other' ? 'rgba(153,88,42,0.70)' : 'rgb(96,99,104)')))};
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
margin-top:30px;
`
const DurationInputLabel = styled(Label)`
grid-column: 1;
grid-row: 9;
`
const EventStartDateInput = styled(Input)`
grid-column: 2;
grid-row: 9;
`
const ErrorMessageStartDate = styled(ErrorMessage)`
grid-column: 2;
grid-row: 10;
`
const EventEndDateInput = styled(Input)`
grid-column: 3;
grid-row: 9;
`
const ErrorMessageEndDate = styled(ErrorMessage)`
grid-column: 3;
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

const PacklistInputLabel = styled(Label)`
grid-column: 1;
grid-row: 19;
`

const PacklistInput = styled(Select)`
grid-column: 2 / span 2;
grid-row: 19;
display: block;
width: 100%;
padding: 20px;
border-radius: 4px;
border: 1px solid rgb(96,99,104);
margin-top: 0;
padding: 4px;
font-size: 100%;
color: black;
background: rgb(96,99,104);
`

const ButtonGroup = styled.div`
grid-column: 1 / span 3;
grid-row: 20;
display: flex;
justify-content: center;
width: 100%;
maring:7px;
margin-top: 30px;
`
const SubmitButton = styled.button`
  background-color: rgba(111,29,27,0.75);
`

