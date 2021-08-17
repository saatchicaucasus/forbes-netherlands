import React, { useEffect, useState } from 'react'
import firebase from 'gatsby-plugin-firebase'
import incrementViews from '../../lib/increment-view'

const ViewCounter = ({ id }) => {
  const [viewCount, setViewCount] = useState('')

  useEffect(() => {
    // 1 is displayed for a split second and then the correct count
    // This is a workaround
    const onViews = (newViews) => {
      setViewCount(newViews.val() === 1 ? 0 : newViews.val())
    }

    incrementViews(id)

    firebase.database().ref(`/views`).child(id).on(`value`, onViews)

    return () => {
      if (firebase.database()) {
        firebase.database().ref(`/views`).child(id).off(`value`, onViews)
      }
    }
  }, [id])

  return (
    <div className="text-forbes-dark-gray text-xs font-sans font-normal">
      {viewCount ? viewCount : `0`} Views
    </div>
  )
}

export default ViewCounter
