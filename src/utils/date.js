
export function formatDate(eventStartDate, eventEndDate) {
    
    const startDate = new Date (eventStartDate)
    const endDate = new Date(eventEndDate)
    const formatOptions = {
        day:"2-digit",
        month:"2-digit",
        year:"numeric"
    }

    return (
    startDate.toLocaleDateString('de-DE', formatOptions)+ ' - ' + endDate.toLocaleDateString('de-DE', formatOptions)
    )
   
    
}