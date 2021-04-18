module.exports = {
    handleArray(arrayMongo) {
        return arrayMongo.map((element) => element.toObject());
    },
    handleEle(element) {
        return element.toObject();
    },
};
