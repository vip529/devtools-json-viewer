import JSONViewer from "./jsonObjectViewer";
import "./styles.css";

export default function App() {
  const sampleObject = {
    a: {
      b: 1
    },
    c: {
      f: 3,
      c: {
        f: {
          g: 4
        }
      }
    }
  };
  return (
    <div className="App">
      <JSONViewer data={sampleObject} />
    </div>
  );
}
