import React from 'react';
import Image from "next/image";

function Projects() {
    return (
        <div className='spacing min-h-[150vh] md:min-h-[200vh]'>

            <div className='relative'>
                <div className="absolute top-0 left-0">
                    <div className='h-[35vh] md:h-[60vh] w-[40vw] md:w-[35vw] relative'>
                        <Image src='https://images.unsplash.com/photo-1470966771603-a937e7a99d69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                               alt='Menu'
                               fill
                               className='object-cover'
                        />
                    </div>
                </div>

                <div className="absolute top-24 right-0">
                    <div className='h-[40vh] md:h-[70vh] w-[30vw] md:w-[25vw] relative'>
                        <Image src='https://images.unsplash.com/photo-1616723543326-1e470e76c238?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
                               alt='Menu'
                               fill
                               className='object-cover'
                        />
                    </div>
                </div>


                <div className="absolute top-[42vh] md:top-[80vh] left-0">
                    <div className='h-[40vh] md:h-[75vh] w-[34vw] md:w-[28vw] relative'>
                        <Image src='https://images.unsplash.com/photo-1624477922341-e12567768aae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                               alt='Menu'
                               fill
                               className='object-cover'
                        />
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Projects;