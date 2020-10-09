# Representation of Quantum Interference Pattern

React App uses sudo random number generator to display/hide elements that approximate a quantum interference pattern.  Randomness is evenly distributed and the banding effect is achieved with pixels of various darkness.  This darkness is achieved by displaying a representation of the apparent phase of the moon in 12 states from new, through waxing crescent, waxing gibbous, full, waning gibbous, waning crescent.  

Pixels are skipped randomly at the moment, however they will ultimately be seeded for repeatablity.

## Build Project React UI & Visualisation

    parcel index.html

## Short Term Targets

- Improve efficiency of element generator/ no need to keep recreating a large array of React Elements
- Look at repeatable randomness
- Export raster images