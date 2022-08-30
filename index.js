function superbowlWin(record){
    let foundItem = record.find(item => item.result === 'W')
    if(foundItem){
        return foundItem.year
    } 
}