import React, {useEffect, useRef} from 'react';
import {amita} from "../../pages";

function Cta() {

    return (
        <div >
        <div  className='spacing h-[100vh] box flex flex-col justify-center text-center'>
            <h1 className='text-5xl' style={amita.style}>
                Human stories that connect us all.
            </h1>

            <p className='px-[25%] mt-6 text-gray-600 dark:text-gray-400 '>
                While pushing audiovisual limits, we keep our eyes on the human stories that connect us all.
            </p>
        </div>
        </div>
    );
}

export default Cta;