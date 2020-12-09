import { Grid } from "@material-ui/core"
import React from "react"
import Heading from "./Heading"
import MetalMeta from "./MetalMeta"
import data from "./metal.json"
import Container from "@material-ui/core/Container"
import Band from "./Band"

function App() {
  const mapBand = data.map(band => (
    <Grid item xs={3} key={band.ID}>
      <Band
        bandName={band.band_name}
        fans={band.fans}
        formed={band.formed}
        origin={band.origin}
        split={band.split}
        style={band.style}
      />
    </Grid>
  ))

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Heading />
        </Grid>
        <Grid item xs={12} justify="center" alignItems="center">
          <MetalMeta />
        </Grid>
        {mapBand}
      </Grid>
    </Container>
  )
}

export default App
