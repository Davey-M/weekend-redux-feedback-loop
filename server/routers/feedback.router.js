const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, res) => {

    const sqlText = `
        SELECT * FROM "feedback" ORDER BY "id" DESC;
    `

    pool.query(sqlText)
        .then(response => {
            res.send(response.rows);
        })
        .catch(err => {
            console.error('Error in get in router', err);
            res.sendStatus(500);
        })
})

router.post('/', (req, res) => {
    // console.log(req.body);

    const sqlText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES
            ($1, $2, $3, $4);
    `

    const { feelingStore, understandingStore, supportStore, commentsStore } = req.body;
    const sqlOptions = [
        feelingStore,
        understandingStore,
        supportStore,
        commentsStore,
    ]

    pool.query(sqlText, sqlOptions)
        .then(response => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.error('Error posing to database', err);
            res.sendStatus(500);
        })

})

module.exports = router;