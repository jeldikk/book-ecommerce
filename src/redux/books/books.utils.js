export const ITEMS_PER_PAGE = 10;

export const normaliseBookList = (bookList) => {

    return new Promise((resolve)=>{
        let newData = bookList.reduce((prevValue, currValue)=>{
            if(!prevValue[currValue.bookID]){
                prevValue[currValue.bookID] = {
                    ...currValue
                }
            }
            return prevValue
        }, {})

        resolve(newData)
    })
}