import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core"
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 300,
    "&:hover": {
      background: "grey",
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

function Band({ bandName, fans, formed, origin, split, style }) {
  const classes = useStyles()

  const [like, setLike] = useState(0)

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {bandName}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Fans: {fans}
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            Formed: {formed}
          </Typography>
          <Typography variant="body2" component="p">
            Origin: {origin}
            <br />
            Split: {split}
            <br />
            Style: {style}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Likes: {like}
          </Typography>
          <CardActions>
            <Button
              onClick={() => setLike(like + 1)}
              variant="contained"
              color="secondary"
            >
              Like
            </Button>
            <Button
              onClick={() => setLike(like - 1)}
              variant="contained"
              color="secondary"
            >
              Unlike
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  )
}

export default Band
