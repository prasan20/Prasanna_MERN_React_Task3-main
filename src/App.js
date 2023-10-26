import logo from './logo.svg';
import './App.css';
import ColorPicker from './Components/ColorPicker';
const colors = [
  '#FF5733',
  '#33FF57',
  '#5733FF',
  '#FF3399',
  '#FFFF33',
  '#33FFFF',
  '#FF33FF',
  '#33FF33',
  '#FF6633',
  '#9933FF',
  '#33FF99',
  '#FF3366',
  '#FF9933',
  '#33CCFF',
  '#FF33CC',
  '#66FF33',
  '#FF33FF',
  '#CC33FF',
  '#FF9933',
  '#33FFCC',
  '#FF3399',
  '#FFCC33',
  '#33FF66',
];
function App() {
  return (
   <ColorPicker colors={colors}> </ColorPicker>
  );
}

export default App;
