import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

EventForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
}

export default function EventForm({ onCancel, onSave }) {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (eventEntry, event) => {
        event.target.reset()
        onSave(eventEntry)
    }

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h1>Create Event</h1>
                <CategoryInputLabel>
                    Category:
                    <CategoryInput
                        name="category"
                        ref={register({ required: true })}
                    />
                </CategoryInputLabel>
                <NameInputLabel>
                    EventName:
                    <NameInput
                        name="name"
                        ref={register({ required: true, minLength: 3 })}
                    />
                </NameInputLabel>

                {errors.name && errors.name.type === 'required' && (
                    <ErrorMessage>Name is required!</ErrorMessage>
                )}
                {errors.name && errors.name.type === 'minLength' && (
                    <ErrorMessage>
                        This field requires at least 3 characters!
                    </ErrorMessage>
                )}
                <LocationInputLabel>
                    EventLocation:
                   <LocationInput
                        name="location"
                        ref={register({ required: true, minLength: 3 })}
                    />
                </LocationInputLabel>

                {errors.location && errors.location.type === 'required' && (
                    <ErrorMessage>Location is required!</ErrorMessage>
                )}
                {errors.location && errors.location.type === 'minLength' && (
                    <ErrorMessage>
                        This field requires at least 3 characters!
                    </ErrorMessage>
                )}

                <h2>EventInfos</h2>
                <StyledInputLabel>
                    Periode:
                   <EventStartDateInput
                        name="eventStartDate"
                        ref={register({ required: true })}
                    />
                </StyledInputLabel>
                <EventEndDateInput
                    name="eventEndDate"
                    ref={register({ required: true })}
                />
                {errors.eventStartDate && errors.eventStartDate.type === 'required' &&
                    errors.eventEndDate && errors.eventEndDate.type === 'required' &&
                    (
                        <ErrorMessage>Date is required!</ErrorMessage>
                    )}

                <StyledInputLabel>
                    Address:
                   <StyledInput
                        name="street"
                        ref={register({ required: true, minLength: 5 })}
                    />
                </StyledInputLabel>

                {errors.street && errors.street.type === 'required' && (
                    <ErrorMessage>Street is required!</ErrorMessage>
                )}
                {errors.street && errors.street.type === 'minLength' && (
                    <ErrorMessage>
                        This field requires at least 5 characters!
                    </ErrorMessage>
                )}

                <StyledInput
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

                <StyledInputLabel>
                    Website:
          <StyledInput
                        name="website"
                        ref={register({ required: true, minLength: 8 })}
                    />
                </StyledInputLabel>

                {errors.website && errors.website.type === 'required' && (
                    <ErrorMessage>Website is required!</ErrorMessage>
                )}
                {errors.website && errors.website.type === 'minLength' && (
                    <ErrorMessage>
                        This field requires at least 8 characters!
                    </ErrorMessage>
                )}

                <StyledInputLabel>
                    TicketPrice:
                    <StyledInput
                        name="price"
                        ref={register({ required: false })}
                    />
                </StyledInputLabel>

                <StyledInputLabel>
                    Picture:
                   <StyledInput
                        name="poster"
                        ref={register({ required: false })}
                    />
                </StyledInputLabel>

                <ButtonGroup>
                    <button onClick={onCancel} type="button">
                        Cancel
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
  display: grid;
  align-content: start;
  min-width: 300px;
  gap: 20px;
`
const CategoryInputLabel = styled.label`
  color: var(--blue-main);
  font-weight: 400;
  font-size: 87.5%;
  line-height: 1.143;
`

const CategoryInput = styled.input`
  display: block;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid var(--blue-50);
  margin-top: 10px;
  font-size: 75%;
  color: var(--blue-main);
`

const NameInputLabel = styled.label`
  color: var(--blue-main);
  font-weight: 400;
  font-size: 87.5%;
  line-height: 1.143;
`

const NameInput = styled.input`
  display: block;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid var(--blue-50);
  margin-top: 10px;
  font-size: 75%;
  color: var(--blue-main);
`
const LocationInputLabel = styled.label`
  color: var(--blue-main);
  font-weight: 400;
  font-size: 87.5%;
  line-height: 1.143;
`

const LocationInput = styled.input`
  display: block;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid var(--blue-50);
  margin-top: 10px;
  font-size: 75%;
  color: var(--blue-main);
`
const EventStartDateInput = styled.input`
  display: block;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid var(--blue-50);
  margin-top: 10px;
  font-size: 75%;
  color: var(--blue-main);
`
const EventEndDateInput = styled.input`
  display: block;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid var(--blue-50);
  margin-top: 10px;
  font-size: 75%;
  color: var(--blue-main);
`

const StyledInputLabel = styled.label`
  color: var(--blue-main);
  font-weight: 400;
  font-size: 87.5%;
  line-height: 1.143;
`

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid var(--blue-50);
  margin-top: 10px;
  font-size: 75%;
  color: var(--blue-main);
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

const SubmitButton = styled.button`
  background-color: var(--orange-main);
`

