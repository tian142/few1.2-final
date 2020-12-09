import { Paper, Typography } from "@material-ui/core"
import React from "react"
import data from "./metal.json"
import { makeStyles } from "@material-ui/core/styles"

const numOfBand = data.length

const useStyles = makeStyles({
  text: {
    minWidth: 275,
    textAlign: "center",
  },
})

function MetalMeta() {
  const classes = useStyles()

  return (
    <div className={classes.text}>
      <Typography variant="h2" className={classes.text}>
        Metal Bands 🤘
      </Typography>
      <Typography variant="h4">Bands: {numOfBand}</Typography>
    </div>
  )
}

export default MetalMeta
