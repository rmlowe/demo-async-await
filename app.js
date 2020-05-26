const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Mobile', 'Mac', 'Pen', 'Book']);
        }, 1000);
    });
};

