import { FormControl,
     ChakraProvider,
     Stack,
     FormLabel,
     Select,
     Input,
     VStack,
     Button,
     FormHelperText,
     FormErrorMessage
     } from "@chakra-ui/react";

const BookingForm = ({availableTimes, SubmitForm, state, handleChange}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        SubmitForm(e);
      };

    const isError = state.guests === '';

    return (
        <ChakraProvider>
            <FormControl>
                <form onSubmit={onSubmit}>
                <VStack alignItems='left'>
                    <FormControl isRequired isInvalid={isError}>
                        <FormLabel htmlFor="numberOfGuests">Number of guests:</FormLabel>
                        <Input
                         arialabel='On Click'
                         requred='true'
                         max={12}
                         min={1}
                         type="number"
                         placeholder="1"
                         id="numberOfGuests"
                         value={state.guests}
                         data-dispatchtype="updateNumberOfGuests"
                         onChange={handleChange}
                        />
                        {!isError ? (
                        <FormHelperText>
                            Enter min. one guest.
                        </FormHelperText>
                        ) : (
                        <FormErrorMessage>Number of guest is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="date">Select a date:</FormLabel>
                        <Input
                         arialabel='On Click'
                         placeholder="Select Date"
                         size="md"
                         mb={1}
                         type="date"
                         id="date"
                         min={new Date().toISOString().slice(0, 10)}
                         value={state.date}
                         data-dispatchtype="updateDate"
                         onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="available-times">Select time:</FormLabel>
                        <Select
                         arialabel='On Click'
                         id="time"
                         name='time'
                         value={state.time}
                         onChange={handleChange}
                         data-dispatchtype="updateTime"
                         type='time'
                        >
                         {availableTimes?.map((availableTime) => (
                         <option data-testid="res-time"
                         value={availableTime}
                         key={availableTime}>{availableTime}
                         </option>
                        ))}
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="location">Location:</FormLabel>
                        <Select
                         arialabel='On Click'
                         mb={1}
                         placeholder='Location'
                         value={state.location}
                         onChange={handleChange}
                         data-dispatchtype="updateLocation"
                        >
                            <option value='New York'>New York</option>
                            <option value='Chicago'>Chicago</option>
                            <option value='Springfield'>Springfield</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="occasion">Occasion:</FormLabel>
                        <Select
                         arialabel='On Click'
                         mb={1}
                         placeholder='Occasion'
                         value={state.occasion}
                         onChange={handleChange}
                         data-dispatchtype="updateOccasion"
                        >
                            <option value='birthday'>Birthday</option>
                            <option value='engagement'>Engagement</option>
                            <option value='anniversary'>Anniversary</option>
                        </Select>
                    </FormControl>
                    <FormLabel htmlFor="seating-option">Seating Option:</FormLabel>
                    <Stack direction='row'>
                        <label>
                         <input
                         arialabel='On Click'
                         type="radio"
                         onChange={handleChange}
                         data-dispatchtype="updateEnv"
                         name="myRadio"
                         value='Standard'
                         defaultChecked={true}
                        />
                        Standard
                        </label>
                        <label>
                            <input
                             arialabel='On Click'
                             type="radio"
                             onChange={handleChange}
                             data-dispatchtype="updateEnv"
                             name="myRadio"
                             value='Outside'
                             />
                             Outside
                        </label>
                    </Stack>
                        <Button
                         bg='#F4CE14'
                         onSubmit={SubmitForm}
                         type='submit'
                         value="Make Your reservation">Book
                        </Button>
                </VStack>
                </form>
            </FormControl>
        </ChakraProvider>
    )
}



export default BookingForm;