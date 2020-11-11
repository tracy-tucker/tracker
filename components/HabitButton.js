import { useState } from 'react' //React hook

const HabitButton = () => {
    const [complete, setComplete] = useState(false)
    return (
        <span>
            10/15
            <button onClick={() => setComplete(!complete)}>
                {complete ? 'X' : 'O'}
            </button>
        </span>
    );
};

export default HabitButton;