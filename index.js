import { file } from 'bun'

Bun.serve({
  port: 3000,

  fetch(request) {
    const url = new URL(request.url);
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