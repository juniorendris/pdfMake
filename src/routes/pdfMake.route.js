const express = require("express");
const { pdfgenerator } = require("../controllers/pdfMake.controller");

const pdfRouter = express.Router();

pdfRouter.get("/generate-pdf", pdfgenerator);

module.exports = pdfRouter;