const colors = {
  primary: '#4b7bec',
  primary2: '#d1d8e0',
  secondary: '#706fd3',
  lightblue: '#3b86ff',
  black: '#000000',
  grey1: '#d1d8e0',
  grey2: '#f5f6fa',
  white: '#fff',
  green: '#26de81',
  red: '#fc5c65',
  yellow: '#fed330',
  font: '#b0b2bf',
  headerbartext: "#fff",
  headerbarbg: "#4b7bec",
  grey: "#dcdde1"
}
const fonts = {
  hairline: 'Lato-Hairline',
  light: 'Lato-Light',
  base: 'Lato-Regular',
  bold: 'Lato-Bold'
}

const gstyles = {
  box: {
    marginVertical:10,
    padding:5,
    width: '98%',
    position: 'relative',
    backgroundColor: colors.white,
    alignItems: 'center',
    elevation: 2,
    borderRadius: 15


  },
  container: {

    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  title: {
    color: colors.primary,
    fontSize: 17,
    margin: 5
  }
}
export {
  colors,
  fonts,
  gstyles
}