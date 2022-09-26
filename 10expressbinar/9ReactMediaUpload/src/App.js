import { useState, Fragment } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [uploadedFileURL, setUploadedFileURL] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData();

    form.append("picture", file);

    try {
      const response = await axios.put(
        "http://localhost:8080/api/v1/profiles/1/picture",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Kalo di upload langsung di-server
      setUploadedFileURL("http://localhost:8080/" + response.data.url);
    } catch (err) {
      console.log(err);
      console.log(err?.responses?.data);
    }
  }

  return (
    <Fragment>
      {uploadedFileURL && (
        <img src={uploadedFileURL} alt="Uploaded Image URL" />
      )}

      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <input type="submit" value="Upload" />
      </form>
    </Fragment>
  );
}

export default App;
