
export function formatDate(eventdate) {
    const [startDateJson, endDateJson] = eventdate.split(' - ')
    const startDate = new Date (startDateJson)
    const endDate = new Date(endDateJson)
    const formatOptions = {
        day:"2-digit",
        month:"2-digit",
        year:"numeric"

    }
    return startDate.toLocaleDateString('de-DE', formatOptions) + " - " + endDate.toLocaleDateString('de-DE', formatOptions)
}