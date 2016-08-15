import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 2,
    backgroundColor: '#193441',
  },
  displayText: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 20,
  },
  numberContainer: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3E606F',
  },
  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#91AA9D',
    //margin: 10,
  },
  inputButtonText: {
    //textAlign: 'center',
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    //marginBottom: 5,
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  },
  topsies: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  bodies: {
    flex: 8,
    //justifyContent: 'center',
    //alignItems: 'center',
    padding: 30,
    backgroundColor: 'white',
  },
  hymnNum: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 15,
    color: 'darkgreen'
  },
  section: {
    textAlign: 'left',
    color: '#555555',
    marginBottom: 20,
    fontSize: 12,
    //style: 'italic',
  },
  verses: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 10,
    fontSize: 16,
  },
});
