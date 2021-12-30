const moment = require('moment-timezone')
export const helpZoneTime = (data) =>{
    let customData = data
    const Localcontry = Intl.DateTimeFormat().resolvedOptions().timeZone
    customData.map(
        el =>{
            const splitTime = el.Fecha.split(/T/)
            const mHostingContry = moment.tz(el.Fecha,el.ZoneTime)
            const mLocalContry = mHostingContry.clone().tz(Localcontry)
            const LocalTime = `${splitTime[0]} Hora:${mLocalContry.format("ha").toUpperCase()}` 
            el.LocalTime = LocalTime
        }
    )
    return customData
}