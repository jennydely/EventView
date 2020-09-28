import React, { useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { useParams, useHistory } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import styled from 'styled-components/macro'
import '../../lib/ReactDatePicker.css'
import Input from '../components/common/Input'
import Label from '../components/common/Label'
import ErrorMessage from '../components/common/ErrorMessage'
import Select from '../components/common/Select'
import ReactDatePicker from '../../lib/ReactDatePicker'
import getColorOfEventCategory from '../../services/getColorOfEventCategory'
import { getUniquePacklists } from '../PacklistForm/services/getUniquePacklists'
import usePacklists from '../Packlist/usePacklists'
import useEvents from '../EventMain/useEvents'
import Footer from '../components/FormFooter'
import FormHeader from '../components/FormHeader'
import useEventForm from './useEventForm'

export default function EventForm() {
  const { eventId } = useParams()
  const {
    register,
    handleSubmit,
    getValues,
    errors,
    control,
    reset,
  } = useForm()
  const { eventArray, addEvent, updateEvent } = useEvents()
  const { onEventSave, onEventSaveEdit } = useEventForm(addEvent, updateEvent)
  const eventToEdit = editEvent()
  const history = useHistory()
  const onSubmit = (eventEntry, event) => {
    event.preventDefault()

    if (eventToEdit) {
      onEventSaveEdit({
        ...eventEntry,
        id: eventToEdit.id,
        isBought: eventToEdit.isBought,
      })
    } else {
      onEventSave({ ...eventEntry, id: uuid() })
    }
    history.push('/')

    if (event && event.target && typeof event.target.reset === 'function')
      event.target.reset()
  }
  const { packlists } = usePacklists()
  const uniquePacklists = getUniquePacklists(packlists)

  useEffect(() => {
    reset({
      eventStartDate: eventToEdit ? new Date(eventToEdit.eventStartDate) : '',
      eventEndDate: eventToEdit ? new Date(eventToEdit.eventEndDate) : '',
    })
  }, [eventToEdit, reset])

  return (
    <>
      <FormHeader headerText={eventToEdit ? 'Edit Event' : 'Create Event'} />
      <main>
        <Form
          data-testid="eventform"
          onSubmit={handleSubmit(onSubmit)}
          eventToEdit={eventToEdit ? eventToEdit : false}
        >
          <CategoryInputLabel htmlFor="category">Category:</CategoryInputLabel>
          <CategoryInput
            name="category"
            id="category"
            defaultValue={eventToEdit?.category}
            register={register({ required: true })}
            options={['Metal', 'Medieval', 'Holiday', 'Other']}
          />
          {errors.category && errors.category.type === 'required' && (
            <ErrorMessageCategoryReq>
              Category is required!
            </ErrorMessageCategoryReq>
          )}

          <InputLabelColumn2 row={2} htmlFor="name">
            Name:
          </InputLabelColumn2>
          <InputColumn2
            row={3}
            placeholder="event name"
            defaultValue={eventToEdit?.name}
            id="name"
            name="name"
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 21,
              validate: (value) =>
                value && value.trim().length >= 3 && value.trim().length <= 21,
            })}
          />

          {errors.name?.type === 'required' && (
            <ErrorMessageColumn2 row={4}>Name is required!</ErrorMessageColumn2>
          )}
          {(errors.name?.type === 'validate' ||
            errors.name?.type === 'minLength') && (
            <ErrorMessageColumn2 row={4}>
              This field requires at least 3 characters!
            </ErrorMessageColumn2>
          )}
          {(errors.name?.type === 'validate' ||
            errors.name?.type === 'maxLength') && (
            <ErrorMessageColumn2 row={4}>
              The name can reach a maximum of 21 characters!
            </ErrorMessageColumn2>
          )}

          <InputLabelColumn2 row={5} htmlFor="location">
            Eventlocation:
          </InputLabelColumn2>
          <InputColumn2
            row={6}
            placeholder="location of the event"
            defaultValue={eventToEdit?.location}
            id="location"
            name="location"
            ref={register({
              required: true,
              minLength: 3,
              maxLength: 20,
              validate: (value) =>
                value && value.trim().length >= 3 && value.trim().length <= 20,
            })}
          />
          {errors.location?.type === 'required' && (
            <ErrorMessageColumn2 row={7}>
              Location is required!
            </ErrorMessageColumn2>
          )}
          {(errors.location?.type === 'validate' ||
            errors.location?.type === 'minLength') && (
            <ErrorMessageColumn2 row={7}>
              {' '}
              This field requires at least 3 characters!
            </ErrorMessageColumn2>
          )}
          {(errors.location?.type === 'validate' ||
            errors.location?.type === 'maxLength') && (
            <ErrorMessageColumn2 row={7}>
              The location can reach a maximum of 20 characters!
            </ErrorMessageColumn2>
          )}

          <EventInfosText>Event Infos</EventInfosText>
          <InputLabelColumn1 row={9} htmlFor="EventStartDate">
            Duration:
          </InputLabelColumn1>
          <EventStartDateContainer>
            <EventStartDateController
              id="EventStartDate"
              name="eventStartDate"
              defaultValue={
                eventToEdit ? new Date(eventToEdit?.eventStartDate) : ''
              }
              control={control}
              rules={{
                required: true,
                validate: (value) => value <= getValues().eventEndDate,
              }}
              render={({ onChange, onBlur, value }) => (
                <ReactDatePicker
                  selected={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholderText="start date"
                  data-testid="start date"
                />
              )}
            />
          </EventStartDateContainer>
          {errors.eventStartDate?.type === 'validate' && (
            <ErrorMessageStartDate>
              Start date must be before end date!{' '}
            </ErrorMessageStartDate>
          )}

          {errors.eventStartDate?.type === 'required' && (
            <ErrorMessageStartDate>
              Date is required and needs the right form!{' '}
            </ErrorMessageStartDate>
          )}

          {errors.eventStartDate?.type === 'pattern' && (
            <ErrorMessageStartDate>
              Date must be written like: yyyy-mm-dd
            </ErrorMessageStartDate>
          )}
          <EventEndDateContainer>
            <EventEndDateController
              id="EventEndDate"
              name="eventEndDate"
              defaultValue={
                eventToEdit ? new Date(eventToEdit?.eventEndDate) : ''
              }
              control={control}
              rules={{
                required: true,
                validate: (value) => value >= getValues().eventStartDate,
              }}
              render={({ onChange, onBlur, value }) => (
                <ReactDatePicker
                  selected={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholderText="end date"
                />
              )}
            />
          </EventEndDateContainer>
          {errors.eventEndDate?.type === 'required' && (
            <ErrorMessageEndDate>
              Date is required and needs the right form!{' '}
            </ErrorMessageEndDate>
          )}

          {errors.eventEndDate?.type === 'pattern' && (
            <ErrorMessageEndDate>
              {' '}
              Date must be written like: yyyy-mm-dd{' '}
            </ErrorMessageEndDate>
          )}

          <AddressInputLabel htmlFor="Street">Address:</AddressInputLabel>
          <InputColumn2
            row={11}
            placeholder="street + number"
            defaultValue={eventToEdit?.street}
            id="street"
            name="street"
            ref={register({
              required: false,
              validate: (value) => !value || value.trim().length <= 20,
            })}
          />

          {errors.street?.type === 'validate' && (
            <ErrorMessageColumn2 row={12}>
              This field can reache a maximum of 20 characters!
            </ErrorMessageColumn2>
          )}

          <InputColumn2
            row={13}
            placeholder="zip code // address field 2"
            defaultValue={eventToEdit?.zip}
            id="zip"
            name="zip"
            ref={register({
              required: false,
              validate: (value) => !value || value.trim().length <= 10,
            })}
          />

          {errors.zip?.type === 'validate' && (
            <ErrorMessageColumn2 row={14}>
              This field can reache a maximum of 10 characters!
            </ErrorMessageColumn2>
          )}

          <InputLabelColumn1 row={15} htmlFor="website">
            Website:
          </InputLabelColumn1>
          <InputColumn2
            row={15}
            placeholder="http://www.website.de"
            defaultValue={eventToEdit?.website}
            id="website"
            name="website"
            ref={register({
              required: true,
              minLength: 8,
              validate: (value) => value && value.trim().length >= 8,
              pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
            })}
          />

          {errors.website?.type === 'required' && (
            <ErrorMessageColumn2 row={16}>
              Website is required!
            </ErrorMessageColumn2>
          )}
          {(errors.website?.type === 'validate' ||
            errors.website?.type === 'minLength') && (
            <ErrorMessageColumn2 row={16}>
              This field requires at least 8 characters!
            </ErrorMessageColumn2>
          )}
          {errors.website?.type === 'pattern' && (
            <ErrorMessageColumn2 row={16}>
              Should begin with www or http
            </ErrorMessageColumn2>
          )}

          <InputLabelColumn1 row={17} htmlFor="price">
            Price:
          </InputLabelColumn1>
          <InputColumn2
            row={17}
            placeholder="ticket price or range"
            defaultValue={eventToEdit?.price}
            id="price"
            name="price"
            ref={register({ required: false })}
          />
          <InputLabelColumn1 row={18} htmlFor="poster">
            Picture:{' '}
          </InputLabelColumn1>
          <InputColumn2
            row={18}
            placeholder="http://website.de/banner.jpg"
            defaultValue={eventToEdit?.poster}
            id="poster"
            name="poster"
            ref={register({
              required: false,
              pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/,
            })}
          />
          <InputLabelColumn1 row={19} htmlFor="packlist">
            Add PackList:
          </InputLabelColumn1>
          <PacklistInput
            value={eventToEdit?.packlistCategory}
            name="packlistCategory"
            id="packlist"
            register={register()}
            options={uniquePacklists}
          />
        </Form>
      </main>
      <Footer handleSubmit={handleSubmit(onSubmit)} />
    </>
  )
  function editEvent() {
    const index = eventArray.findIndex((event) => '' + event.id === eventId)
    const editEvent = eventArray[index]
    return editEvent
  }
}

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 118px);
  grid-template-rows: repeat(20, auto);
  align-content: left;
  overflow: hidden;
  max-width: 365px;
  padding: 2px;
  gap: 4px;
`
const InputLabelColumn1 = styled(Label)`
  grid-column: 1;
  grid-row: ${(props) => props.row};
`
const InputLabelColumn2 = styled(Label)`
  grid-column: 2 / span 2;
  grid-row: ${(props) => props.row};
  text-align: left;
`
const InputColumn2 = styled(Input)`
  grid-column: 2 / span 2;
  grid-row: ${(props) => props.row};
`
const ErrorMessageColumn2 = styled(ErrorMessage)`
  grid-column: 2 / span 2;
  grid-row: ${(props) => props.row};
`
const CategoryInputLabel = styled(Label)`
  grid-column: 1;
  grid-row: 2;
  text-align: left;
`
const CategoryInput = styled(Select)`
  grid-column: 1;
  grid-row: 3;
  display: block;
  padding: 20px;
  border: var(--border-darkgrey);
  border-radius: 4px;
  margin-top: 0;
  padding: 4px;
  font-size: 112.5%;
  color: black;
  background: ${(opt) => getColorOfEventCategory(opt.name)};
`
const ErrorMessageCategoryReq = styled(ErrorMessage)`
  grid-column: 1;
  grid-row: 4;
`
const EventInfosText = styled.h2`
  grid-column: 1 / span 2;
  grid-row: 8;
  margin-top: 4px;
  text-align: left;
`
const EventStartDateContainer = styled.div`
  grid-column: 2/3;
  grid-row: 9;
`
const EventStartDateController = styled(Controller)`
  grid-column: 2;
  grid-row: 9;
  display: block;
  width: 120px;
  padding: 20px;
  border-radius: 4px;
  border: var(--border-darkgrey);
  margin-top: 0;
  padding: 4px;
  font-size: 112.5%;
  color: black;
`
const ErrorMessageStartDate = styled(ErrorMessage)`
  grid-column: 2;
  grid-row: 10;
`
const EventEndDateContainer = styled.div`
  grid-column: 3;
  grid-row: 9;
`
const EventEndDateController = styled(Controller)`
  grid-column: 3;
  grid-row: 9;
  display: block;
  display: block;
  width: 120px;
  padding: 20px;
  border-radius: 4px;
  border: var(--border-darkgrey);
  margin-top: 0;
  margin-right: 7px;
  padding: 4px;
  font-size: 112.5%;
  color: black;
`
const ErrorMessageEndDate = styled(ErrorMessage)`
  grid-column: 3;
  grid-row: 10;
`
const AddressInputLabel = styled(Label)`
  grid-column: 1;
  grid-row: 11 / span 2;
`
const PacklistInput = styled(Select)`
  grid-column: 2 / span 2;
  grid-row: 19;
  display: block;
  border-radius: 4px;
  border: var(--border-darkgrey);
  margin-top: 0;
  padding: 4px;
  font-size: 112.5%;
  color: black;
  background: var(--lightgrey-main);
`
