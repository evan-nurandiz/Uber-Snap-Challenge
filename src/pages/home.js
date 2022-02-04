import React, { useEffect, useState } from 'react'
import { Banner, Masonry, Loader } from '../components'
import API from '../middleware/api'
import InfiniteScroll from 'react-infinite-scroll-component'

const Home = () => {
    let pageNumber = 1

    const [post, setPost] = useState([])
    const [totalPages, setTotalPage] = useState(0)
    const [loader, setLoader] = useState(true)

    //FUNCTION TO CALL API
    const fetchData = async (pageNumber) => {
        await API.get('/', { params: { page: pageNumber } }).then((response) => {
            //SAVE RESPONSE DATA TO ARRAY
            setPost([...post, ...response.data.hits])
            //GET TOTAL PAGES
            setTotalPage(response.data.totalHits / response.data.hits.length)
            //SET LOADER TO FALSE
            setLoader(false)
        }).catch(err => {
            console.log(err)
        })
    }

    //CALL FUNCTION USING USEEFFECT
    useEffect(() => {
        fetchData(pageNumber)
    }, [])

    return (
        <React.Fragment>
            <section id="banner" className="mb-10">
                <Banner />
            </section>
            {
                loader ?
                    <Loader />
                    :
                    <InfiniteScroll dataLength={post.length} next={() => fetchData(pageNumber + 1)} hasMore={pageNumber < totalPages ? true : false}>
                        <section id="post">
                            <Masonry posts={post} />
                        </section>
                    </InfiniteScroll>
            }

        </React.Fragment >
    )
}

export default Home
