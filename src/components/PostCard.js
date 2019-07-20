import React, { useContext } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import LikeButton from '../components/LikeButton'
import { AuthContext } from '../context/auth'

import { Button, Card, Icon, Image } from 'semantic-ui-react'

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {
  const { user } = useContext(AuthContext)

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow()}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        <Button
          basic={true}
          color='blue'
          icon='comments'
          label={{
            basic: true,
            color: 'blue',
            pointing: 'left',
            content: `${commentCount}`
          }}
          as={Link}
          to={`/posts/${id}`}
          size='small'
        />
        {user && user.username === username && (
          <Button
            as='div'
            color='red'
            floated='right'
            onClick={() => console.log('Delete post')}
            size='mini'
          >
            <Icon name='trash' style={{ margin: 0 }} />
          </Button>
        )}
      </Card.Content>
    </Card>
  )
}

export default PostCard
