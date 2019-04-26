const timezone = [
  'America/New_York',
  'Europe/London',
  'Asia/Bangkok',
  'Asia/Taipei',
  'Australia/Sydney'
]
const clocks = document.querySelector('.clocks')

function displaytime(zone) {
  let option = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }
  Object.assign(option, { timeZone: zone })
  let datetime = new Date().toLocaleDateString('en', option).split(',')
  let date = datetime[0].split(' ').reverse()
  let year = datetime[1]
  let time = datetime[2]
  let hour = datetime[2].split(':')[0]
  let country = zone.split('/')[1]
  return { country: country, date: date, year: year, time: time, hour: hour }
}

function displayClock() {
  clocks.innerHTML = ''
  timezone.forEach(zone => {
    let { country, date, year, time, hour } = displaytime(zone)
    clocks.innerHTML += `<div class="clock ${hour > 11 ? 'night' : ''}">
     <div class="location">
      <div class="location-country">${country}</div>
      <div class="location-date">${date}. ${year}</div>
     </div>
     <div class="time">${time}</div>
     </div>
    `
  })
}
displayClock()
setInterval(displayClock, 60000)
