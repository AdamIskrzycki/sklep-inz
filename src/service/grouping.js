
export const groupBy = (list, key) => {
    const groupedArray = [];
  
    list.forEach((item) => {
      const collection = groupedArray.find((elem) => elem[key] === item[key]);

      if (collection === undefined) {
        item.count = 1;
        groupedArray.push(item);
      } else {
        collection.count++
      }
    });
  
    return groupedArray;
  };
  