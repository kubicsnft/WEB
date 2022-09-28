import React from 'react'
import { FaEthereum } from 'react-icons/fa'
function cardPremium(props) {




    return (
        <div className="p-2 mb-4 mr-3 bg-gray-200  rounded-md shadow-xl shadow-[#7B94b1] border-primary w-96">
            <img className="w-full rounded-md" key={props.id} src={props.image}></img>
            <div className="">
                <div className="flex mb-1">
                    <div className="">
                        <h3 className="text-lg font-bold">{props.title}</h3>
                    </div>
                </div>
                {/* <p className='text-sm text-start'>{props.description}</p> */}
            </div>
            <div className='mt-2 text-start'>
                <div>
                    <p>Price</p>
                    <p className='flex flex-row items-center' >
                        <FaEthereum />{props.price}
                    </p>


                    
                </div>
            </div>
            <button className="w-full p-2 px-4 mt-4 text-white rounded-xl bg-primary hover:text-[#E1B649] hover:font-bold hover:shadow-xl" onClick={() => addToWhitelist()}>
                BUY
            </button>
        </div>
    );
};



export default cardPremium
