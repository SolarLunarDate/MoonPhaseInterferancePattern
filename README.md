# Representation of Quantum Interference Pattern

React App uses sudo random number generator to display/hide elements that approximate a quantum interference pattern.  Randomness is evenly distributed and the banding effect is achieved with pixels of various darkness.  This darkness is achieved by displaying a representation of the apparent phase of the moon in 12 states from new, through waxing crescent, waxing gibbous, full, waning gibbous, waning crescent.  

Pixels are skipped randomly in a repeatable fashion given a seed value which can be set in the form.

## Preview React UI & Visualisation

    parcel start

## Build Deployable Artifacts

    parcel build

## Short Term Targets

- Improve efficiency of element generator/ no need to keep recreating a large array of React Elements
- Export raster images
- Add routing so a query string can set form values
- Turn seed into digits of Solar Lunar Date

