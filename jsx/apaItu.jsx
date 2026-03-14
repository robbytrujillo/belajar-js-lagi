const element = <h1>Halo, dunia!</h1>;

// JSX vs React.createElement()
const element1 = React.createElement("h1", null, "Halo, dunia!");

// JSX = Javascript XML
// XML = seperti kakak dari HTML
// HTML : Aturan longgar, JSX : aturan ketat
// JSX mirip dengan XML (lebih terstruktur dan rapi)
// Babel: penerjemah JSX, karena browser tidak paham langsung JSX (butuh penerjemah yaitu Babel)

// cara pakai babel:
{
  /* <script src="https://unpkg.com/@babel/standalone/babel.js"></script> */
}
{
  /* <script type="text/babel">
    // Kode JSX di sini
    </script> */
}
