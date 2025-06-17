import Home from '@/app/page';
import ReactPDF from '@react-pdf/renderer';

ReactPDF.render(<Home />, `${__dirname}/example.pdf`);