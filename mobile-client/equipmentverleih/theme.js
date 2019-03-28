const colors = {
  primary: '#333F65',
  primary2: '#d1d8e0',
  secondary: '#706fd3',
  lightblue: '#3b86ff',
  black: '#000000',
  grey1: '#d1d8e0',
  grey2: '#f5f6fa',
  white: '#fff',
  green: '#7deb81',
  red: '#DE5959',
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
    
    padding:5,
    width: '90%',
    marginVertical:10,
    position: 'relative',
    backgroundColor: colors.white,
    alignItems: 'center',
    elevation: 14,
    borderRadius: 5


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