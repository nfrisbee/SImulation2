module.exports = {
    getHouseList: (req, res) => {
        const db = req.app.get('db');
        db.get_houselist().then(houses => {
            res.status(200).send(houses)
        }).catch(err => {
            console.log('getHouseList:', err);
        });  
    },
}
