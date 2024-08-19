import React from 'react'

const Thankyou = () => {
    return (
        <div className='flex items-center h-screen justify-center'>
            <div className='text-center space-y-4'>
                <img
                    className='block m-auto w-64'
                    src="https://static.vecteezy.com/system/resources/thumbnails/011/858/556/small_2x/green-check-mark-icon-with-circle-tick-box-check-list-circle-frame-checkbox-symbol-sign-png.png" alt="" />
                <h2 className='text-4xl font-bold'>Your Order has been Successfully Placed</h2>
                <p>Visit Manage Orders Page to View Your Order Details</p>
                <div > <a className='bg-blue-400 m-2 hover:bg-blue-500 px-5  py-2 rounded-xl text-white' href='/productlist'>Continue Shopping</a></div>
            </div>
           
        </div>
    )
}

export default Thankyou;