import React from "react";
import { Slider, Rail, Handles, Tracks } from "react-compound-slider";
import { SliderRail, Handle, Track } from "./SliderItems"; // example render components - source below

const sliderStyle = {
  position: "relative",
  width: "100%",
  touchAction: "none",
};

const domain = [500, 6000];

function SliderComponent({ value, onUpdate, onChange }) {
  return (
    <>
      <Slider
        mode={1}
        step={50}
        domain={domain}
        rootStyle={sliderStyle}
        onUpdate={onUpdate}
        onChange={onChange}
        values={value}
      >
        <Rail>
          {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map((handle) => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
      </Slider>
    </>
  );
}

// class SliderComponent extends Component {
//   state = {
//     values: defaultValues,
//     update: defaultValues.slice(),
//   }

//   onUpdate = update => {
//     this.setState({ update })
//   }

//   onChange = values => {
//     this.setState({ values })
//   }

//   render() {
//     const {
//       state: { values, update },
//     } = this

//     return (
//       <div style={{ height: 120, width: '400px', }}>
//         <h1>Home</h1>
//         <Slider
//           mode={1}
//           step={1}
//           domain={domain}
//           rootStyle={sliderStyle}
//           onUpdate={this.onUpdate}
//           onChange={this.onChange}
//           values={values}
//         >
//           <Rail>
//             {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
//           </Rail>
//           <Handles>
//             {({ handles, getHandleProps }) => (
//               <div className="slider-handles">
//                 {handles.map(handle => (
//                   <Handle
//                     key={handle.id}
//                     handle={handle}
//                     domain={domain}
//                     getHandleProps={getHandleProps}
//                   />
//                 ))}
//               </div>
//             )}
//           </Handles>
//           <Tracks right={false}>
//             {({ tracks, getTrackProps }) => (
//               <div className="slider-tracks">
//                 {tracks.map(({ id, source, target }) => (
//                   <Track
//                     key={id}
//                     source={source}
//                     target={target}
//                     getTrackProps={getTrackProps}
//                   />
//                 ))}
//               </div>
//             )}
//           </Tracks>
//         </Slider>
//       </div>
//     )
//   }
// }

export default SliderComponent;
