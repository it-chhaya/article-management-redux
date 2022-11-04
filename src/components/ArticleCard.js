import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ArticleCard(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">User ID = {props.userId}</Card.Subtitle>
        <Card.Text>
          {props.body}
        </Card.Text>
        <Link to={'/remove'} className='text-danger'>Remove</Link>
        <Link to={'/read/' + props.id } className='text-primary'>View</Link>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;