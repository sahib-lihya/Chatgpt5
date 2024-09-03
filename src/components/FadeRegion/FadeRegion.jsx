import {useEffect, useRef, useState} from 'react';
import PropTypes from "prop-types";
import './FadeRegion.css'

function FadeRegion({children, threshold = 1, rootMargin = '10px'}) {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting);
        }, {
            threshold: threshold,
            rootMargin: rootMargin //shorthand
        });

        const _ref = ref.current;

        _ref && observer.observe(_ref);

        return () => {
            _ref && observer.unobserve(_ref);
        };
    }, [threshold, rootMargin]);    // listen for these variables changing to automatically update useEffect

    return (
        <div
            ref={ref}
            className={`fade-region${visible ? ' in' : ''}`}
        >
            {children}
        </div>
    );
}

FadeRegion.propTypes = {
    children: PropTypes.node.isRequired,
    threshold: PropTypes.number,
    rootMargin: PropTypes.string
}

export default FadeRegion;