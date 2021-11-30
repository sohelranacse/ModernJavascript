
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

/*
meeting
    .then(addToCalender)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err.message)
    })
*/

async function myMeeting() {
    try {
        const meetingDetails = await meeting
        const calender = await addToCalender(meetingDetails)
        console.log(calender)
    } catch {
        console.log('Something wrong')
    }
}
myMeeting()