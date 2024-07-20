import { file } from 'bun'
import { generatePdf } from './getPdf';

Bun.serve({
  port: 3000,


  async fetch(request) {
    const url = new URL(request.url);


          if (url.pathname === "/api/data") {
            return new Response(JSON.stringify({ message: "Hello from API" }), {
              headers: {
                "Content-Type": "application/json",
              },
            })
          }

          if (url.pathname === "/api/pdf") {
            await generatePdf()
            const pdfFilePath = "./cv-marcin-grzmil.pdf";
            const pdfFile = Bun.file(pdfFilePath)
            return new Response(pdfFile,{
              headers: {
                "Content-Type": "application/pdf"
              }
            })
          }
    

    let filePath = "." + url.pathname; // Convert URL path to a file path
    if (filePath === "./") {
      filePath = "./index.html"; // Default to index.html if root is requested
    }

    // Determine the content type based on the file extension
    let contentType = "text/plain";
    if (filePath.endsWith(".html")) {
      contentType = "text/html";
    } else if (filePath.endsWith(".css")) {
      contentType = "text/css";
    }else if (filePath.endsWith(".pdf")) {
      contentType = "application/pdf";
    }

    // Serve the file with the correct content type
    return new Response(file(filePath), {
      headers: {
        "Content-Type": contentType,
      },
    });
  },
});


console.log("Server running at http://localhost:3000");