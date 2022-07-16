# Maps

## About the project

Created to have a map for every item, starting off with rental properties. Users will be able to add entries for all sorts of stuff, including:
1) Where sceneries are great
2) Where food is great ( not all places can be listed on Zomato )
3) Where to go to see the sunset
4) Which area is lit

And they can create new categories as they wish. I won't be doing much for Auth ( next-auth - google-auth will just do fine)

## Purpose

1) Build a cool full stack project from scratch using completely new technologies
2) Have fun
3) If people start to use it, get interesting locations ;)
4) Deployment, publicity etc.

DUE TO LACK OF NICE MAP LIBRARY THE PROJECT ON PAUSE INDEFINITELY

New things I wanted to try

### Leaflet.js

Leaflet.js did not work for me. It needed dynamic import with SSR turned off to access the window object. I was not happy with results so I removed it. Will explore alternate map libraries

```ts
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const WorldMap = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default WorldMap;
```
### Google Maps & Mapbox Maps

Both are pricy, not sure whether I want to use them. And are a bit difficult to customize to my needs. So I'll continue my search on.


### EUI

EUI makes the website surprisingly slower, it added approximately 2s delay to the page load. Hence removed it as well.
Will be using Tailwind.css now.

### React-query

Working well as of now.

### Animate.css

Seemed very basic and not worth using.

### Bulletproof React

Strong opinionated react-architecture, wanted to do things from scratch so skipped it as well.

### MobX-Tree

Still thinking whether I will need a state management library so jury is still out.