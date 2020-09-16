import React, { useRef } from 'react'
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

EventForm.propTypes = {
  onEventSave: PropTypes.func.isRequired,
  packlists: PropTypes.array.isRequired,
}

export default function EventForm({ onEventSave, packlists }) {
  const {
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    control,
  } = useForm()
  const onSubmit = (eventEntry, event) => {
    if (event && event.target && typeof event.target.reset === 'function')
      // for testing

      event.target.reset()
    onEventSave(eventEntry)
  }
  const allPacklists = packlists.map((packlist) => packlist.name)
  return (
    <>
      <Form data-testid="eventform" onSubmit={handleSubmit(onSubmit)}>
        <CategoryInputLabel htmlFor="category">Category:</CategoryInputLabel>
        <CategoryInput
          name="category"
          id="category"
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
        <EventStartDateDiv>
          <EventStartDateController
            id="EventStartDate"
            name="eventStartDate"
            defaultValue=""
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
              />
            )}
          />
        </EventStartDateDiv>
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
        <EventEndDateDiv>
          <EventEndDateController
            id="EventEndDate"
            name="eventEndDate"
            defaultValue=""
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
        </EventEndDateDiv>
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
          id="price"
          name="price"
          ref={register({ required: false })}
        />
        <InputLabelColumn1 row={18} htmlFor="poster">
          Picture:{' '}
        </InputLabelColumn1>
        <InputColumn2
          row={18}
          placeholder="http://www.website.de/banner.jpg"
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
          name="packlistCategory"
          id="packlist"
          register={register({ required: true })}
          options={allPacklists}
        />
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
  display: grid;
  grid-template-columns: auto repeat(2, 120px);
  grid-template-rows: repeat(20, auto);
  align-content: center;
  min-width: 300px;
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
  width: 100%;
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
const EventStartDateDiv = styled.div`
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
const EventEndDateDiv = styled.div`
  grid-column: 3;
  grid-row: 9;
`

const EventEndDateController = styled(Controller)`
  grid-column: 3;
  grid-row: 9;
  display: block;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  border: var(--border-darkgrey);
  margin-top: 0;
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
  width: 100%;
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
  width: 100%;
  margin: 20px 7px;
`
const SubmitButton = styled.button`
  grid-column: 1 / span 3;
  grid-row: 20;
  background-color: var(--darkred-75);
`
