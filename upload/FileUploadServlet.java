import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.*;
import javax.servlet.http.*;

@WebServlet("/upload")
@MultipartConfig
public class FileUploadServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Part filePart = request.getPart("file");
        String fileName = filePart.getSubmittedFileName();

        // Upload path: inside deployed /uploads/ directory
        String uploadPath = getServletContext().getRealPath("/uploads");

        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) uploadDir.mkdir();

        filePart.write(uploadPath + File.separator + fileName);

        String fileUrl = request.getContextPath() + "/uploads/" + fileName;

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h3>Upload successful!</h3>");
        out.println("<a href='" + fileUrl + "' target='_blank'>View your file</a>");
    }
}
