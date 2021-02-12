const express = require('express');
const app = new express();

const dotenv = require('dotenv');

function sentimentNLUInstance() {
    let api_key = process.env.API_KEY;
    let api_url = process.env.API_URL;

    const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
    const { IamAuthenticator } = require('ibm-watson/auth');

    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
        version: '2020-08-01',
        authenticator: new IamAuthenticator({
            apikey: api_key
        }),
        serviceUrl: api_url
    });
    return naturalLanguageUnderstanding;
}

app.use(express.static('client'))

const cors_app = require('cors');
app.use(cors_app());

app.get("/",(req,res)=>{
    res.render('index.html');
  });

app.get("/url/emotion", (req,res) => {

    return res.send({"happy":"90","sad":"10"});
});

app.get("/url/sentiment", (req,res) => {
    var result = "";
    var nlu = sentimentNLUInstance();
    nlu.analyze(nlu.analyze(
        {
            text: req.body, // Buffer or String
            features: {
            concepts: {},
            keywords: {}
            }
        })
        .then(response => {
            result = JSON.stringify(response.result, null, 2);
            console.log(result);
        })
        .catch(err => {
            console.log('error: ', err);
        }));
    return res.send("url sentiment for "+req.query.url + ":" + result);
});

app.get("/text/emotion", (req,res) => {
    return res.send({"happy":"10","sad":"90"});
});

app.get("/text/sentiment", (req,res) => {
    return res.send("text sentiment for "+req.query.text);
});

let server = app.listen(3000, () => {
    console.log('Listening', server.address().port)
})

