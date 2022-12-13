import { Dimensions, StyleSheet } from 'react-native'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  touchableOpacity: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  label: {
    color: 'black',
  },
  placeholder: {
    color: 'gray',
  },
  icon: {
    color: 'black',
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -7 }],
  },
  modalWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: WIDTH - 40,
    maxHeight: HEIGHT / 2,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 4,
    padding: 10,
  },
  optionContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  option: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noElements: {
    color: 'gray',
    textAlign: 'center',
  },
})
