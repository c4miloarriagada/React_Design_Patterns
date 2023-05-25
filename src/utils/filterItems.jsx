

export const filterItems = (query, items) => {
    if(query === ""){
        return items
    }

    return items.filter((item)=> item.title.toLowerCase().indexOf(query) === 0)

}
