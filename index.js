
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers(){
    let returnFirstTwoDrivers = [...drivers]
    return  returnFirstTwoDrivers.slice(0,2)
}


function returnLastTwoDrivers(){
    let returnLastTwoDrivers = [...drivers]
    return returnLastTwoDrivers.splice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(){
    return function(num){
        return num * 5
    }

}

function fareDoubler(num){
return num * 2
}


function fareTripler(num){
    return num * 3
}



function selectDifferentDrivers(drivers,Function){
    if(Function == returnFirstTwoDrivers){
      return  returnFirstTwoDrivers()
    }
    else if(Function == returnLastTwoDrivers){
     return   returnLastTwoDrivers()
    }
}
