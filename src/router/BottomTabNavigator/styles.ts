import { StyleSheet } from 'react-native'

const HEADER_HEIGHT = 50

export default StyleSheet.create({
  addIcon: {
    marginTop: 5,
  },
  headerContainer: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: HEADER_HEIGHT,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 10,
  },
  filtersBtn: {
    position: 'absolute',
    right: 10,
  },
  sortBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 45,
  },
  sortText: {
    fontSize: 16,
  },
  modalContainer: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    margin: 0,
    marginTop: 10,
    right: 45,
    padding: 20,
  },
  sortItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 150,
    margin: 5,
  },
  sortItemText: {
    color: 'black',
    fontSize: 16,
  },
})
