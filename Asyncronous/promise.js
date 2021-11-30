
const hasMeeting = false
const meeting = new Promise((resolve, reject) => {
    // do something
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical meeting',
            location: 'Google Meet',
            time: '10:00 PM'
        }
        resolve(meetingDetails)
    } else {
        reject(new Error('Meeting already sechuled!'))
    }
})

/*
const addToCalender = (meetingDetails) => {
    return new Promise((resolve, reject) => {
        const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
        resolve(calender)
    })
}
*/
const addToCalender = (meetingDetails) => {
    const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
    return Promise.resolve(calender)
    
}

meeting
    .then(addToCalender)
    .then((res) => {
        // resolve data
        console.log(JSON.stringify(res))
    })
    .catch((err) => {
        // rejected data
        console.log(err.message)
    })

console.log('hello')