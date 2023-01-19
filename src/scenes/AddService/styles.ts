import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  label: {
    color: 'black',
    marginTop: 15,
    marginBottom: 10,
    marginLeft: 0,
    fontSize: 16,
  },
  button: {
    marginVertical: 40,
    color: 'white',
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    color: 'black',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  required: {
    color: 'red',
  },
  switcherContainer: {
    flexDirection: 'row',
  },
  map: {
    aspectRatio: 1,
  },
  photoButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  photoButton: {
    margin: 0,
    padding: 0,
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 15,
    width: 80,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoText: {
    margin: 0,
    padding: 0,
    fontSize: 16,
    color: '#81b0ff',
  },
  deleteButton: {
    width: 20,
    aspectRatio: 1,
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 2,
  },
  image: {
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 50,
    width: 80,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  inputErrorMsg: {
    color: 'red',
    marginLeft: 10,
  },
})
