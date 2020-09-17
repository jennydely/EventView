import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import styled from 'styled-components/macro'
import Input from '../common/Input'
import Label from '../common/Label'
import ErrorMessage from '../common/ErrorMessage'
import Select from '../common/Select'
import PropTypes from 'prop-types'
import getColorByName from '../services/getColorByName'
import ReactDatePicker from '../lib/ReactDatePicker'
import '../lib/ReactDatePicker.css'
import reloadIcon from '../img/reloadIcon.svg'
import saveIcon from '../img/saveIcon.svg'

EventForm.propTypes = {
  onEventSave: PropTypes.func.isRequired,
  packlists: PropTypes.array.isRequired,
}

export default function EventForm({
  onEventSave,
  onEventSaveEdit,
  packlists,
  eventToEdit,
}) {
  const {
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    control,
  } = useForm()
  const onSubmit = (eventEntry, event) => {
    eventToEdit
      ? onEventSaveEdit({
          ...eventEntry,
          id: eventToEdit.id,
          isBought: eventToEdit.isBought,
        })
      : onEventSave(eventEntry)
    if (event && event.target && typeof event.target.reset === 'function')
      event.target.reset()
  }

  const allPacklists = packlists.map((packlist) => packlist.name)
  return (
    <>
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
          options={['metal', 'medieval', 'holiday', 'other']}
        />
        {errors.category && errors.category.type === 'required' && (
          <ErrorMessageCategoryReq>
            Category is required!
          </ErrorMessageCategoryReq>
        )}

        <InputLabelColumn2 row={2} htmlFor="name">
          EventName:
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
            maxLength: 20,
            validate: (value) =>
              value && value.trim().length >= 3 && value.trim().length <= 20,
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
            The name can reach a maximum of 20 characters!
          </ErrorMessageColumn2>
        )}

        <InputLabelColumn2 row={5} htmlFor="location">
          EventLocation:
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

        <EventInfosText>EventInfos</EventInfosText>
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
            required: true,
            minLength: 5,
            validate: (value) => value && value.trim().length >= 5,
          })}
        />

        {errors.street?.type === 'required' && (
          <ErrorMessageColumn2 row={12}>
            Street is required!
          </ErrorMessageColumn2>
        )}
        {(errors.street?.type === 'validate' ||
          errors.street?.type === 'minLength') && (
          <ErrorMessageColumn2 row={12}>
            This field requires at least 5 characters!
          </ErrorMessageColumn2>
        )}

        <InputColumn2
          row={13}
          placeholder="zip"
          defaultValue={eventToEdit?.zip}
          id="zip"
          name="zip"
          ref={register({
            required: true,
            minLength: 2,
            validate: (value) => value && value.trim().length >= 2,
          })}
        />

        {errors.zip?.type === 'required' && (
          <ErrorMessageColumn2 row={14}>Zip is required!</ErrorMessageColumn2>
        )}
        {(errors.zip?.type === 'validate' ||
          errors.zip?.type === 'minLength') && (
          <ErrorMessageColumn2 row={14}>
            This field requires at least 2 characters!
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
          TicketPrice:
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
          defaultValue={eventToEdit?.packlistCategory}
          name="packlistCategory"
          id="packlist"
          register={register({ required: true })}
          options={allPacklists}
        />
        <ButtonGroup>
          <button type="reset" onClick={() => reset()}>
            <img src={reloadIcon} alt="reload" />
          </button>
          <SubmitButton type="submit">
            {' '}
            <img src={saveIcon} alt="save" />
          </SubmitButton>
        </ButtonGroup>
      </Form>
    </>
  )
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
  background: ${(opt) => getColorByName(opt.name)};
`
const ErrorMessageCategoryReq = styled(ErrorMessage)`
  grid-column: 1;
  grid-row: 4;
`
const EventInfosText = styled.h2`
  grid-column: 1 / span 2;
  grid-row: 8;
  margin-top: 20px;
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
const ButtonGroup = styled.div`
  grid-column: 1 / span 3;
  grid-row: 20;
  display: flex;
  justify-content: center;
  margin: 14px 7px;
`
const SubmitButton = styled.button`
  grid-column: 1 / span 3;
  grid-row: 20;
`
