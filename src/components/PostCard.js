import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import moment from 'moment'

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes }
}) {
  function likePost() {
    console.log('like post')
  }

  function commentOnPost() {
    console.log('comment post')
  }

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
        <Button
          basic={true}
          color='teal'
          content='Like'
          icon='heart'
          label={{
            basic: true,
            color: 'teal',
            pointing: 'left',
            content: `${likeCount}`
          }}
          onClick={likePost}
        />
        <Button
          basic={true}
          color='blue'
          content='Comment'
          icon='comments'
          label={{
            basic: true,
            color: 'blue',
            pointing: 'left',
            content: `${commentCount}`
          }}
          as={Link}
          to={`/posts/${id}`}
        />
      </Card.Content>
    </Card>
  )
}

export default PostCard
