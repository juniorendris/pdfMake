const { createPdf } = require("../services/createPdf.service");

exports.pdfgenerator = async (req, res) => {
    try {
        // 1. Await the compiled binary data buffer from your service
    const pdfBuffer=await createPdf();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=student_profile.pdf");
    res.send(pdfBuffer);
    } catch (error) {
        console.error("Controller Error:", error);
        if (!res.headersSent) {
            res.status(500).json({ error: "Failed to generate PDF" });
        }
    }
}; 
