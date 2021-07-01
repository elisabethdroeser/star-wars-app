import PropTypes from 'prop-types'
//import Button from './Button'

const Header = ({ title }) => {

  //const onClick = () => {
  //  console.log('Click')
  //<!--Button color='yellow' text='Sök' onClick={onClick} /-->
  //}

  return (
    <header>
      <h1 style={{color: 'yellow', backgroundColor:'black', padding: '20px'}}>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Starwars',
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header


