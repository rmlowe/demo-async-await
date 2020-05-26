const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Mobile', 'Mac', 'Pen', 'Book']);
        }, 1000);
    });
};

getItems()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.error(err));

