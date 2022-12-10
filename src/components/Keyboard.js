import { Key } from "./Key";

export function Keyboard () {

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    return (
    <div className="keyboard">
        <div class="line1">
            {keys1.map( (key) => {
                return <Key keyVal = {key} />
            })}
        </div>
        <div class="line2">
            {keys2.map( (key) => {
                return <Key keyVal = {key} />
            })}
        </div>
        <div class="line3">
            <Key keyVal = {'ENTER'} bigKey />
            {keys3.map( (key) => {
                return <Key keyVal = {key} />
            })}
            <Key keyVal = {'DELETE'} bigKey />
        </div>
    </div>
    );
}