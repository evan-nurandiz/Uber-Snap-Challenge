import React from 'react'

const index = (props) => {
    return (
        <React.Fragment>
            {
                props.openModal ?
                    <div className="flex bg-transparant-bg overflow-x-hidden fixed right-0 left-0 top-0 z-50 justify-center items-center h-full md:h-full md:inset-0">
                        <div className="relative px-4 w-full max-w-6xl h-full mt-14 md:mt-14 lg:mt-14">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex justify-between items-start p-5 ">
                                    <div className="profile-picture flex gap-4 items-center">
                                        <img src={props.modalData.userImageURL} alt="" className="w-12 h-12 lg:w-16 lg:h-16 rounded-full" />
                                        <p className="text-white text-lg">{props.modalData.user}</p>
                                    </div>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        onClick={props.closeModal}>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                <div className="p-6 space-y-6">
                                    <div className="text-center ">
                                        <img src={props.modalData.webformatURL} alt="" className="mx-auto rounded-md" />
                                    </div>
                                    <div className="flex justify-between md:justify-start lg:justify-start lg:gap-6 items-center">
                                        <div className="space-y-2 text-start">
                                            <p className="text-white text-md">Views</p>
                                            <p className="text-white text-lg">{props.modalData.views}</p>
                                        </div>
                                        <div className="space-y-2 text-start">
                                            <p className="text-white text-md">Views</p>
                                            <p className="text-white text-lg">{props.modalData.likes}</p>
                                        </div>
                                        <div className="space-y-2 text-start">
                                            <p className="text-white text-md">Views</p>
                                            <p className="text-white text-lg">{props.modalData.comments}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null
            }

        </React.Fragment>
    )
}

export default index
