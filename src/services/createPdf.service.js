// services/createPdf.service.js
const pdfmake = require("pdfmake");

// 1. Configure standard built-in core fonts
pdfmake.addFonts({
  Helvetica: {
    normal: "Helvetica",
    bold: "Helvetica-Bold",
  },
});

// 2. Clear security policy checks
pdfmake.setUrlAccessPolicy(() => false); 
pdfmake.setLocalAccessPolicy(() => true);

exports.createPdf = async (student) => {

const docDefinition = {
  pageSize: "A4",
  pageMargins: [35, 25, 35, 25],

  content: [
    {
      columns: [
        {
          width: "*",
          stack: [
            {
              text: "STUDENT PROFILE",
              style: "header",
              decoration: "underline",
              alignment: "center",
              margin: [35, 12, 0, 18],
            },
            {
              text: "Student details",
              alignment: "center",
              decoration: "underline",
              fontSize: 9,
              margin: [35, 0, 0, 8],
            },
          ],
        },
        {
          width: 65,
          table: {
            widths: [75],
            heights: [75],
            body: [
              [
                {
                  text: "AFFIX\nPASSPORT SIZE\nPHOTO",
                  alignment: "center",
                  fontSize: 6,
                  margin: [0, 8, 0, 0],
                },
              ],
            ],
          },
          layout: {
            hLineWidth: () => 0.7,
            vLineWidth: () => 0.7,
          },
        },
      ],
      columnGap: 8,
      margin: [0, 0, 0, 3],
    },

    // Student details with aligned writing lines
    {
      table: {
        widths: [20, 235, 10, "*"],
        heights: 19,
        body: [
          ["1.", "Name of the Student", ":", "_____________"],
          ["2.", "Gender (Male, Female, Others)", ":", "_____________"],
          ["3.", "Class and Year", ":", "_____________"],
          ["4.", "Admission Number", ":", "_____________"],
          ["5.", "Date and year of admission", ":", "_____________"],
          ["6.", "Blood Group", ":", "_____________"],
          ["7.", "Category", ":", "_____________"],
          ["8.", "Date of Birth", ":", "_____________"],
          ["9.", "Aadhar Card number", ":", "_____________"],
          ["10.", "Parent's E-Mail ID", ":", "_____________"],
          ["11.", "Mother tongue", ":", "_____________"],
          [
            "12.",
            "Language spoken at home by your child and yourself",
            ":",
            "_____________",
          ],
          ["13.", "SC/ST/OBC/Gen", ":", "_____________"],
          ["14.", "Religion", ":", ""],
          ["15.", "Whether differently abled", ":", "_____________"],
          ["16.", "Nationality", ":", ""],
          ["17.", "Home town address", ":", "_____________"],
          ["18.", "Siblings (if any)", ":", "_____________"],
        ],
      },
      layout: {
        hLineWidth: () => 0,
        vLineWidth: () => 0,
        paddingLeft: () => 1,
        paddingRight: () => 1,
        paddingTop: () => 2,
        paddingBottom: () => 2,
      },
      fontSize: 8,
      margin: [0, 0, 0, 4],
    },

    {
      text: "19. Details of siblings studying in this KV:",
      fontSize: 8,
      margin: [0, 3, 0, 5],
    },

    // Sibling table
    {
      table: {
        headerRows: 1,
        widths: [32, "*", 100],
        heights: [18, 18, 18, 18],
        dontBreakRows: true,
        body: [
          [
            { text: "S.No", alignment: "center" },
            { text: "Name of the student", alignment: "center" },
            { text: "Class and section", alignment: "center" },
          ],
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ],
      },
      layout: {
        hLineWidth: () => 0.6,
        vLineWidth: () => 0.6,
        hLineColor: () => "#777777",
        vLineColor: () => "#777777",
        paddingLeft: () => 3,
        paddingRight: () => 3,
        paddingTop: () => 2,
        paddingBottom: () => 2,
      },
      fontSize: 8,
    },

    {
      text: [
        { text: "20. Field of interest", decoration: "underline" },
        { text: " / Expertise of the child: " },
        { text: "____________________________" },
      ],
      fontSize: 8,
      margin: [0, 5, 0, 0],
    },
  ],

  styles: {
    header: {
      fontSize: 10,
      bold: true,
    },
  },

  defaultStyle: {
    font: "Helvetica",
    fontSize: 9,
    lineHeight: 1,
  },
};

  return await pdfmake.createPdf(docDefinition).getBuffer();
};
                    