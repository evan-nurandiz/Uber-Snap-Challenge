import React from 'react'

const index = () => {
    return (
        <React.Fragment>
            <div className="w-11/12 md:w-11/12 lg:w-10/12 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div className="col-span-1">
                        <div class="animate-pulse flex space-x-4">
                            <div class="rounded-md bg-slate-700 h-16 lg:h-96 w-full"></div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="animate-pulse flex space-x-4">
                            <div class="rounded-md bg-slate-700  h-16 lg:h-64 w-full"></div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="animate-pulse flex space-x-4">
                            <div class="rounded-md bg-slate-700  h-16 lg:h-96 w-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default index
