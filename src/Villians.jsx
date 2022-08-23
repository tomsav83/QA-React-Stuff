import PropTypes from 'prop-types'

const Villians = (props) => {
  const { header, content, number, nonexistent } = props

  return (
    <>
      <h1>Title: {header}</h1>
      <p>Name: {content}</p>
      <p>Age: {number}</p>
      <p>Occupation: {nonexistent} some content</p>
    </>
  )
}

export default Villians

Villians.defaultProps = {
  number: 666,
}

Villians.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  number: PropTypes.number,
  nonexistent: PropTypes.string,
}
