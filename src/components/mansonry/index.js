import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import './index.css'
import { Modal } from '../index'

const Index = (props) => {
    const [openModal, setOpenModal] = useState(false)
    const [modalData, setModalData] = useState([])

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 2,
        399: 2
    };

    const closeModal = () => {
        setOpenModal(false)
        setModalData([])
    }

    return (
        <React.Fragment>
            <div className="w-11/12 md:w-11/12 lg:w-10/12 mx-auto">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {
                        props.posts.map(post => (
                            <img key={post.id} src={post.webformatURL} alt="" className="w-full mb-6 rounded-md" onClick={(e) => {
                                setOpenModal(true)
                                setModalData(post)
                            }} />
                        ))
                    }
                </Masonry >
            </div>
            <Modal openModal={openModal} modalData={modalData} closeModal={closeModal} />
        </React.Fragment>

    )
}

export default Index
