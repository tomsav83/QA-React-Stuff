import PropTypes from 'prop-types'

function Tune({ title, artist, length, rating }) {
  return (
    <div>
      <p>{`Title:  ${title}`}</p>
      <p>{`Artist: ${artist}`}</p>
      <p>{`Length: ${length}`}</p>
      <p>{`Rating: ${rating}`}</p>
    </div>
  )
}

export default Tune

Tune.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
}
