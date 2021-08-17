import React from 'react'
import PropTypes from 'prop-types'
import { FormattedDate } from 'react-intl'

const Time = ({ date }) => {
  return (
    <p
      dateTime={date}
      key={date.id}
      className="text-xs text-forbes-dark-gray font-sans font-normal"
    >
      <FormattedDate
        value={new Date(date)}
        key={date.id}
        month="short"
        day="numeric"
        year="numeric"
      />
    </p>
  )
}

Time.propTypes = {
  date: PropTypes.string.isRequired,
}

export default Time
