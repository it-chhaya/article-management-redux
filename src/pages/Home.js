import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import ArticleCard from '../components/ArticleCard'
import { fetchBooks } from '../services/actions/bookAction'

const Home = (props) => {

    useEffect(() => {
		// Call API
		props.fetchBooks()
    }, [])

	return (
		<Container className="mt-4">
			<Row className='g-2'>
				{ props.books && props.books.map(book => (
                    <Col md={4} key={book.id}>
					    <ArticleCard
                            id={book.id}
                            title={book.title}
                            description={book.description}
                            author={book.author} />
				    </Col>
                )) }
			</Row>
		</Container>
	)
}

const mTp = (store) => {
	return {
		books: store.bookR.books
	}
}

export default connect(mTp, {fetchBooks}) (Home)
