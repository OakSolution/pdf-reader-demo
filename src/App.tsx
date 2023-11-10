import './App.css'
import PdfViewer from './components/PdfViewer'
import pdfTest from './fixes.pdf';

function App() {
  // const pdfFile = './fixes.pdf';
  return (
    <div className="App">
      <PdfViewer file={pdfTest} />
    </div>
  )
}

export default App
