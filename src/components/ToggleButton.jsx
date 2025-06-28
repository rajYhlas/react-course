import { useState } from "react";

const ToggleButton = () => {
    const [power, setPower] = useState(false);

    const onChangePower = () => {
        setPower(!power)
    }

    if(power){
        return (
            <button onClick={onChangePower}>ВКЛ</button>
        )
    }

    return (
        <button onClick={onChangePower}>ВЫКЛ</button>
    )
}

export default ToggleButton