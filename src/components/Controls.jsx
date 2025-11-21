import React from "react";

function Controls({ onRotate, activeButton }) {
    return (
        <div className="flex gap-3">
            {['#DBDBD8', '#95AEC7', '#FFA136', '#6EA06E'].map((color, i) => (
                <button
                    key={i}
                    onClick={() => onRotate(i)}
                    style={{ backgroundColor: `${color}`,
                    border: activeButton === i ? '3px solid blue' : '3px solid transparent'
                    }}
                    className="px-4 py-2 w-[50px] h-[50px] rounded-full mx-2 cursor-pointer"
                > </button>
            ))}
        </div>
    )
}

export default Controls;