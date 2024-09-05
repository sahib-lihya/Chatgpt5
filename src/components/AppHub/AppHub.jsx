// import {useEffect, useRef} from 'react';
// import Isotope from 'isotope-layout';
// import 'isotope-packery';
//
// import './AppHub.css';
//
// const sizes = {
//     '': 1,
//     'large': .1,
//     'horizontal': .5
// };
//
// function pick(selection = sizes) {
//     let threshold = 0;
//
//     for (const [, weight] of Object.entries(selection))
//         threshold += weight;
//
//     const dice = Math.random() * threshold;
//
//     threshold = 0;
//
//     for (const [item, weight] of Object.entries(selection)) {
//         threshold += weight;
//         if (threshold > dice)
//             return item;
//     }
// }
//
// export default function AppHub() {
//     // const isotopeRef = useRef(null);
//
//     // useEffect(() => {
//     //     new Isotope(isotopeRef.current, {
//     //         layoutMode: 'packery',
//     //         percentPosition: true,
//     //         itemSelector: '.app-button',
//     //         packery: {
//     //             //columnWidth: '.column-sizer',
//     //             //gutter: '.gutter-sizer'
//     //         }
//     //     });
//     // }, []);
//
//     return (
//       <div
//           className="app-hub"
//           // ref={isotopeRef}
//       >
//           {Array.from({ length: 9 }).map((style, i) => (
//               <div
//                   key={i}
//                   className={`app-button ${pick()}`}
//               >
//                   app {i + 1}
//               </div>
//           ))}
//       </div>
//     );
// }

import './AppHub.css';

const sizes = {
    '': .5,
    'large': .5,
    'horizontal': .5
};

function pick(selection = sizes) {
    let threshold = 0;

    for (const [, weight] of Object.entries(selection))
        threshold += weight;

    const dice = Math.random() * threshold;

    threshold = 0;

    for (const [item, weight] of Object.entries(selection)) {
        threshold += weight;
        if (threshold > dice)
            return item;
    }
}

export default function AppHub() {
    return (
        <div className="app-hub">
            {Array.from({ length: 6 }).map((style, i) => (
                <button
                    key={i}
                    className={`app-button ${pick()}`}

                >
                    app {i + 1}
                </button>
            ))}
        </div>
    );
}
