import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchBooks, removeBookById } from '../services/actions/bookAction'

function ArticleCard(props) {

  const navigate = useNavigate()

  const onRemove = (id) => {
    props.removeBookById(id)
  }

  // useEffect(() => {
  //   props.fetchBooks()
  // }, [])


  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">User ID = {props.userId}</Card.Subtitle>
        <Card.Text>
          {props.body}
        </Card.Text>
        <Button onClick={() => onRemove(props.id)} className='text-danger btn-link'>Remove</Button>
        <Link to={'/read/' + props.id } className='text-primary'>View</Link>
      </Card.Body>
    </Card>
  );
}

const mTp = (store) => {
  return {
    books: store.bookR.books
  }
}

export default connect(mTp, {fetchBooks, removeBookById}) (ArticleCard);