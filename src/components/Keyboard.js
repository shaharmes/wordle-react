import { useContext } from "react";
import { AppContext } from "../providers/AppContext";
import { Key } from "./Key";

export function Keyboard () {

    const {boardHandler} = useContext(AppContext);

    const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

    function clickHandle () {
        boardHandler('');
    }


    return (
    <div className="keyboard">
        <div className="line1">
            {keys1.map( (key) => {
                return <Key key= {key} keyVal = {key} />
            })}
        </div>
        <div className="line2">
            {keys2.map( (key) => {
                return <Key key= {key} keyVal = {key} />
            })}
        </div>
        <div className="line3">
            <div className='key' id={'big'} onClick={clickHandle}>
                {'ENTER'}
            </div>
            {keys3.map( (key) => {
                return <Key key= {key} keyVal = {key} />
            })}
            <div className='key' id={'big'} onClick={clickHandle}>
                {'DELETE'}
            </div>
        </div>
    </div>
    );
}