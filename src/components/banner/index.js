import React from 'react'

const index = () => {
    return (
        <React.Fragment>
            <div className="xl:h-128 w-full relative">
                <img src={require('../../assets/image/background.jpg')} alt="" className="h-full w-full brightness-50" />
                <div className="absolute bottom-1/2 left-1/4 md:left-1/3 lg:left-1/3 text-left">
                    <p className="text-white font-bold text-lg md:text-xl lg:text-4xl mb-2">Free Pixel</p>
                    <p className="text-white font-semibold text-md md:text-lg lg:text-lg">Free Image to All People</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default index
