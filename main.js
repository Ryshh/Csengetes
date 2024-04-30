let bellSchedule = []

function refresh() 
{
    let selectedValue = document.querySelector('input[name="duration"]:checked').value
    //console.log(selectedValue);
    bellSchedule = bellSchedules[selectedValue]
    //console.log(bellSchedule);
}

function getCurrentTime() 
{
    let now = new Date()
    let time = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0')

    return time
}
let actualTime = getCurrentTime()
document.querySelector('h1').innerHTML = getCurrentTime()

function info() 
{
    let current = bellSchedule.find(obj => actualTime >= obj.from && actualTime <= obj.to)
    let infoStr = ''
    if(current)
    {
        infoStr = `Most a/az ${current.id}.óra van és a ${current.to}-ig tart.`
    }
    else 
    {
        let next = bellSchedule.find(obj => actualTime < obj.from)
        if(next)
        {
            infoStr=`Most szünet van, a következő óra ${next.from}-tól kezdődik.`
        }
        else 
        {
            infoStr='Nincs információ........'
        }
    }
    
    return infoStr
}
document.querySelector('.info').innerHTML = info()