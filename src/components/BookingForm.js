import { FormControl,
     ChakraProvider,
     Stack,
     FormLabel,
     Select,
     Input,
     VStack,
     Button,
     } from "@chakra-ui/react";



const BookingForm = ({availableTimes, SubmitForm, state, handleChange}) => {



    const onSubmit = (e) => {
        e.preventDefault();
        SubmitForm(e);
      };


    return (
        <ChakraProvider>
            <FormControl>
                <form onSubmit={onSubmit}>
                <VStack alignItems='left'>
                    <label htmlFor="numberOfGuests">Number of guests:</label>
                        <input
                            type="number"
                            placeholder="1"
                            min="1" max="8"
                            id="numberOfGuests"
                            value={state.guests}
                            data-dispatchtype="updateNumberOfGuests"
                            onChange={handleChange}
                        />
                    <FormLabel htmlFor="date">Select a date:</FormLabel>
                    <Input
                        placeholder="Select Date"
                        size="md"
                        mb={1}
                        bg='#F4CE14'
                        type="date"
                        id="date"
                        min={new Date().toISOString().slice(0, 10)}
                        value={state.date}
                        data-dispatchtype="updateDate"
                        onChange={handleChange}
                    />
                    <label htmlFor="available-times">Select Time</label>
                    <Select
                        id="time"
                        name='time'
                        value={state.time}
                        onChange={handleChange}
                        data-dispatchtype="updateTime"
                    >
                        {availableTimes?.map((availableTime) => (
                        <option data-testid="res-time"
                         value={availableTime} 
                         key={availableTime}>{availableTime}
                         </option>
                        ))}
                    </Select>
                    <label htmlFor="location">location</label>
                    <Select
                        mb={1}
                        bg='#F4CE14'
                        placeholder='Location'
                        value={state.location}
                        onChange={handleChange}
                        data-dispatchtype="updateLocation"
                    >
                        <option value='New York'>New York</option>
                        <option value='Chicago'>Chicago</option>
                        <option value='Springfield'>Springfield</option>
                    </Select>
                    <label htmlFor="occasion">Occasion</label>
                    <Select
                        mb={1}
                        bg='#F4CE14'
                        placeholder='Occasion'
                        value={state.occasion}
                        onChange={handleChange}
                        data-dispatchtype="updateOccasion"
                    >
                        <option value='birthday'>Birthday</option>
                        <option value='engagement'>Engagement</option>
                        <option value='anniversary'>Anniversary</option>
                    </Select>
                    <label htmlFor="seating-option">Seating Option</label>
                    <Stack direction='row'>
                        <label>
                            <input
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
                         onSubmit={SubmitForm}
                         type='submit'
                         value="Make Your reservation" >Submit
                        </Button>
                </VStack>
                </form>
            </FormControl>
        </ChakraProvider>
    )
}



export default BookingForm;