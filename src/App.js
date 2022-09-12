import "./App.css";
import { useState } from "react";

function App() {
  const [kg, setKg] = useState(0);
  const [plo, setPlo] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  function laskuri(e) {
    e.preventDefault();
    var alhocol = 0;
    const burn = kg / 10;
    if (gender === 'male') {
      alhocol = (((plo * 0.33) * (8 * 4.5)) - (burn * time)) / (kg * 0.7);
    } 
    else {
      alhocol = (((plo * 0.33) * (8 * 4.5)) - (burn * time)) / (kg * 0.6);
    }
    if (alhocol < 0){
      alhocol = 0;
    }
    setResult(alhocol)
  }
  return (
    <form onSubmit={laskuri}>
      <h2>Calculating alcohol blood level</h2>
      <div>
        <label>Weight </label>
        <input
          type="number"
          value={kg}
          onChange={e => setKg(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Bottles </label>
          <select value={plo} onChange={e=> setPlo(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>

        </select>
      </div>
      <div>
        <label>Time </label>
        <select value={time} onChange={e=> setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          </select>
          <label> Hours</label>
      </div>
      <div>
        <label>Gender </label>
        <input
          type="radio"
          name="gender"
          value="male"
          defaultChecked
          onChange={e => setGender(e.target.value)}
        />
        <label>Male</label>

        <input
          type="radio"
          name="gender"
          value="female"
          onChange={e => setGender(e.target.value)}
        />
        <label>female</label>
      </div>
      <button>Calculate</button>
      <div>
        <output>{result.toFixed(1)}</output>
      </div>
    </form>
  );
}

export default App;
