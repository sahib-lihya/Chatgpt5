import {useEffect, useRef} from 'react';
import Isotope from 'isotope-layout';
import 'isotope-packery';

import './AppHub.css';

const sizes = {
    '': 1,
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
    const isotope = useRef();

    useEffect(() => {
        isotope.current = new Isotope('.app-hub', {
            itemSelector: '.app-button',
            layoutMode: 'packery',
            packery: {
                //columnWidth: '.column-sizer',
                gutter: '.gutter-sizer',
            },
            //percentPosition: true
        });
    }, []);

    return (
        <div className='app-hub'>
            <div className='column-sizer'></div>
            <div className='gutter-sizer'></div>
            {Array.from({ length: 5 }).map((style, i) => (
                <div
                    key={i}
                    className={`app-button ${pick()}`}
                >
                    app {i + 1}
                </div>
            ))}
        </div>
    );
}