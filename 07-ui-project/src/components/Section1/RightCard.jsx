import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const RightCard = () => {
  return (
    <div className='h-full w-1/3 overflow-hidden relative gap-10 rounded-4xl'>
        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
        <div className='absolute top-0 left-0  h-full w-full '>
            <h2>1</h2>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sit pariatur dolor consectetur ex cum.</p>
            </div>
            <div>
                <button>Satisfied</button>
                <button>
                    <ArrowUpRight size={26} strokeWidth={1.90} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default RightCard