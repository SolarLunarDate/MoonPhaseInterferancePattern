# Representation of Quantum Interference Pattern

React App uses sudo random number generator to display/hide elements that approximate a quantum interference pattern.  Randomness is evenly distributed and the banding effect is achieved with pixels of various darkness.  This darkness is achieved by displaying a representation of the apparent phase of the moon in 12 states from new, through waxing crescent, waxing gibbous, full, waning gibbous, waning crescent.  

Pixels are skipped randomly in a repeatable fashion given a seed, composed of a year, a lunar month and a lunar day.  

Values can be set a the form or via a query string.

## Preview React UI & Visualisation

    parcel start

## Build Deployable Artifacts

    parcel build

## Short Term Targets

- Improve efficiency of element generator/ no need to keep recreating a large array of React Elements
