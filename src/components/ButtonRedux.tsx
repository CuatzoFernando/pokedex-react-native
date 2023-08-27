import { TouchableOpacity, Text, View } from "react-native";
import { useAppDispatch } from "../app/hooks";
import { increment, decrement, incrementByAmount, decrementByAmount, reset } from "../features/slice/counterSlice";

const button = () => {

    const dispatch = useAppDispatch()

    return (
        <>
            <TouchableOpacity
                onPress={() => dispatch(increment())}
                style={{
                    backgroundColor: 'black',
                    padding: 10,
                    borderRadius: 5,
                    margin: 10
                }}
            >
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }} >Increment</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => dispatch(decrement())}
                style={{
                    backgroundColor: '#29938d',
                    padding: 10,
                    borderRadius: 5,
                    margin: 10
                }}
            >
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }} >Decrement</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => dispatch(incrementByAmount(10))}
                style={{
                    backgroundColor: '#29938d',
                    padding: 10,
                    borderRadius: 5,
                    margin: 10
                }}
            >
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }} >Add 10</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => dispatch(decrementByAmount(5))}
                style={{
                    backgroundColor: '#29938d',
                    padding: 10,
                    borderRadius: 5,
                    margin: 10
                }}
            >
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }} >Substract 5</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => dispatch(reset())}
                style={{
                    backgroundColor: '#29938d',
                    padding: 10,
                    borderRadius: 5,
                    margin: 10
                }}
            >
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }} >Reset</Text>
            </TouchableOpacity>
            
        </>
    )
}

export default button