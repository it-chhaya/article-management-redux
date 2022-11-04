import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ArticleService from '../services/ArticleService'

const Read = () => {
    
	const [post, setPost] = useState({
		id: 0,
		userId: 0,
		title: '',
		body: '',
	})

	const { id } = useParams()

	useEffect(() => {
		ArticleService.fetchPostById(id).then((res) => {
			setPost(res)
		})
	}, [])

	return (
		<Container>
			<Row className='justify-content-center'>
				<Col md={8}>
					<h1>{post.title}</h1>
					<hr />
					<h4>User Id = {post.userId}</h4>
					<p>{post.body}</p>
				</Col>
			</Row>
		</Container>
	)
}

export default Read
