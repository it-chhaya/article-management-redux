import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard'
import ArticleService from '../services/ArticleService'

const Home = () => {

	const [posts, setPosts] = useState([
		{
			userId: 0,
			id: 0,
			title:'',
			body: '',
		},
	])

    useEffect(() => {
        ArticleService.fetchPosts()
            .then(res => {
                setPosts(res)
            })
    }, [])

	return (
		<Container className="mt-4">
			<Row className='g-2'>
				{ posts && posts.map(post => (
                    <Col md={4}>
					    <ArticleCard
                            id={post.id}
                            title={post.title}
                            userId={post.userId}
                            body={post.body} />
				    </Col>
                )) }
			</Row>
		</Container>
	)
}

export default Home
